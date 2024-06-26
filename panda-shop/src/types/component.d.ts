import PdSwiper from '@/components/PdSwiper.vue'
import PdGuess from '@/components/PdGuess.vue'

// 自动导入的组件没有类型，需要自定义

/*
在 TypeScript 中，declare module 语句用于定义一个模块，并指定它的公共 API。这个模块可以是一个实际的 JavaScript 模块，也可以是一个假想（假设存在的）模块。

下面定义了一个名为 @vue/runtime-core 的模块，并为其提供了一个名为 GlobalComponents 的接口。这个接口是一个对象，包含两个属性 PdSwiper 和 PdGuess，它们的类型都是 typeof PdSwiper 和 typeof PdGuess。

这种声明语法用于告诉 TypeScript 编译器，模块 @vue/runtime-core 可能导出了两个组件：PdSwiper 和 PdGuess。
这个声明不会创建实际的组件，它只是告诉 TypeScript 编译器，模块 @vue/runtime-core 可能包含这两个组件，以便在导入时提供类型提示和检查。
*/

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
