/**
 * 首页-广告区域数据类型
 * 对应接口返回数据类型
 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  id: string
  imgUrl: string
  /** 跳转类型 */
  type: Number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
