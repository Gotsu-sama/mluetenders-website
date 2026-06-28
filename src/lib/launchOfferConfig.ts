export const LAUNCH_TOTAL = parseInt(process.env.LAUNCH_TOTAL ?? '30', 10)
export const LAUNCH_PRICE = parseInt(process.env.LAUNCH_PRICE ?? '399', 10)
export const LAUNCH_REGULAR_PRICE = parseInt(process.env.LAUNCH_REGULAR_PRICE ?? '699', 10)

export interface LaunchOfferState {
  total: number
  claimed: number
  remaining: number
  active: boolean
  launchPrice: number
  regularPrice: number
}
