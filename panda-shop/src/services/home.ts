import type { BannerItem } from '@/types/home'
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
