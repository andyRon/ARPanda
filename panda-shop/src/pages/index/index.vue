<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import PdSwiper from '@/components/PdSwiper.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI() // TODO
  bannerList.value = res.result
}

// 页面加载【生命周期钩子】
onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <PdSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
