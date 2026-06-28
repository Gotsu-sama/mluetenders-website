/**
 * File-based launch offer store with in-process mutex.
 *
 * Works correctly for a single Node.js server process (next start / PM2).
 * For serverless or multi-instance deployments, replace getClaimed() and
 * tryClaimSpot() with an atomic Redis/database implementation.
 */
import fs from 'fs'
import path from 'path'
import { LAUNCH_TOTAL } from './launchOfferConfig'

const DATA_FILE = path.join(process.cwd(), 'data', 'launch-offer.json')

// In-memory source of truth after first read
let claimed = -1

// Promise-chain mutex — serialises concurrent requests within the process
let lock: Promise<void> = Promise.resolve()

function acquireLock<T>(fn: () => T | Promise<T>): Promise<T> {
  let release!: () => void
  const next = new Promise<void>((r) => { release = r })
  const prev = lock
  lock = next
  return prev.then(async () => {
    try {
      return await fn()
    } finally {
      release()
    }
  })
}

function loadFromDisk(): number {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8')
    const parsed = JSON.parse(raw) as { claimed?: number }
    return typeof parsed.claimed === 'number' ? parsed.claimed : 0
  } catch {
    return 0
  }
}

function saveToDisk(value: number): void {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true })
  fs.writeFileSync(DATA_FILE, JSON.stringify({ claimed: value }), 'utf8')
}

function ensureLoaded(): void {
  if (claimed === -1) {
    claimed = loadFromDisk()
  }
}

export function getClaimed(): number {
  ensureLoaded()
  return claimed
}

/**
 * Atomically reserves one spot.
 * Returns the new claimed count on success, or null if sold out.
 */
export function tryClaimSpot(): Promise<number | null> {
  return acquireLock(() => {
    ensureLoaded()
    if (claimed >= LAUNCH_TOTAL) return null
    claimed += 1
    saveToDisk(claimed)
    return claimed
  })
}
