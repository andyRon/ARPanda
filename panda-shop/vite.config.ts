import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [
    uni(),
    { // 自定义插件禁用vite:vue插件的devToolsEnabled，强制编译 vue 模板时 inline 为 true
      name: 'fix-vite-plugin-vue',
      configResolved(config) {
        const plugin = config.plugins.find((p) => p.name === 'vite:vue')
        if (plugin && plugin.api && plugin.api.options) {
          plugin.api.options.devToolsEnabled = false
        }
      },
    },
  ],
})
