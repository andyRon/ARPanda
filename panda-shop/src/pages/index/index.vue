<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import PdSwiper from '@/components/PdSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { PdGuessInstance } from '@/types/component'
import PdGuess from '@/components/PdGuess.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI() // TODO
  bannerList.value = res.result
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 获取首页热门推荐数据
const homeHotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  homeHotList.value = res.result
}

// 页面加载【生命周期钩子】
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})

// 获取猜你喜欢组件实例
const guessRef = ref<PdGuessInstance>()

// 滚动触底事件
const onScrolltolower = () => {
  console.log('到底了')
  guessRef.value?.getMore()
}
</script>

<template>
  <!-- 自定义导航栏。不需要滚动，固定在上方 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view class="scroll-view" @scrolltolower="onScrolltolower" scroll-y>
    <!-- 自定义轮播图 -->
    <PdSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="homeHotList" />
    <!-- 猜你喜欢 -->
    <PdGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  // flex: 1; // 占据剩下的高度
}
</style>
