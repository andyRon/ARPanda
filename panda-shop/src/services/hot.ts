import type { PageParams } from "@/types/global";
import type { HotResult } from "@/types/hot";
import { http } from "@/utils/http";

type HotParams = PageParams & { // 通过&扩展类型的属性
  subType?: string
}
/**
 * 通用热门推荐类型接口
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
