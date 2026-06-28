import { NextResponse } from 'next/server'
import { tryClaimSpot } from '@/lib/launchOfferStore'
import { LAUNCH_TOTAL, LAUNCH_PRICE, LAUNCH_REGULAR_PRICE } from '@/lib/launchOfferConfig'

/**
 * POST /api/launch-offer/claim
 *
 * Call this after a confirmed successful payment to atomically reserve a spot.
 * Returns 409 if the launch offer is sold out.
 * Idempotency and payment verification should be added here when integrating
 * a payment provider (Stripe, Google Play, etc.).
 */
export async function POST() {
  const newClaimed = await tryClaimSpot()

  if (newClaimed === null) {
    return NextResponse.json(
      { error: 'Launch offer is sold out.' },
      { status: 409 },
    )
  }

  const remaining = Math.max(0, LAUNCH_TOTAL - newClaimed)

  return NextResponse.json({
    total: LAUNCH_TOTAL,
    claimed: newClaimed,
    remaining,
    active: remaining > 0,
    launchPrice: LAUNCH_PRICE,
    regularPrice: LAUNCH_REGULAR_PRICE,
  })
}
