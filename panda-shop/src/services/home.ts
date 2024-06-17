import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页-广告区域
 * @param distributionSite 广告区域展示位置 1 为首页（默认值）2 为商品分类页
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
/**
 * 首页-前台分类
 * 小程序查询前台分类，只查询一级类目信息（此处pc和app、mini共用了一套前台类目信息）
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
