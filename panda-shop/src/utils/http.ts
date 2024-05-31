import { useMemberStore } from '@/stores'

/**
 * 添加拦截器：
 *      拦截request请求
 *      拦截uploadFile文件上传
 */
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        options.timeout = 10000
        options.header = {
            ...options.header,
            'source-client': 'miniapp', //表示小程序段
        }
        // 添加token请求头标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
    },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
