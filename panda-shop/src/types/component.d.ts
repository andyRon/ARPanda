import PdSwiper from '@/components/PdSwiper.vue'
import PdGuess from '@/components/PdGuess.vue'

// 自动导入的组件没有类型，需要自定义

// 定义全局组件类型
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PdSwiper: typeof PdSwiper
    PdGuess: typeof PdGuess
  }
}

// 组件实例类型
export type PdSwiperInstance = InstanceType<typeof PdSwiper>
export type PdGuessInstance = InstanceType<typeof PdGuess>
