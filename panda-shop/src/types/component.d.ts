import PdSwiper from '@/components/PdSwiper.vue'

// 定义全局组件类型
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PdSwiper: typeof PdSwiper
  }
}
