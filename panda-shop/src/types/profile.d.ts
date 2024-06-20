/** 基本用户信息 */
type BaseProfile = {
  id: number
  avatar: string
  account: string
  nickname?: string
}
/** 小程序登录 登录用户信息 */
export type LoginResult = BaseProfile & {
  mobile: string
  token: string
}
/** 用户信息详情 */
export type ProfileDetail = BaseProfile & {
  gender?: Gender
  birthday?: string
  /** 省市区 */
  fullLocation?: string
  profession?: string
}
export type Gender = '女' | '男'
