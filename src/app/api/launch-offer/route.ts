import { NextResponse } from 'next/server'
import { getClaimed } from '@/lib/launchOfferStore'
import { LAUNCH_TOTAL, LAUNCH_PRICE, LAUNCH_REGULAR_PRICE } from '@/lib/launchOfferConfig'

export async function GET() {
  const claimed = getClaimed()
  const remaining = Math.max(0, LAUNCH_TOTAL - claimed)

  return NextResponse.json({
    total: LAUNCH_TOTAL,
    claimed,
    remaining,
    active: remaining > 0,
    launchPrice: LAUNCH_PRICE,
    regularPrice: LAUNCH_REGULAR_PRICE,
  })
}
