<template name="skeleton">
  <view is="components/PdSwiper">
    <view class="carousel PdSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator PdSwiper--navigator" hover-class="none">
            <image class="image PdSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator PdSwiper--indicator">
        <text class="dot PdSwiper--dot"></text>
        <text class="dot PdSwiper--dot"></text>
        <text class="dot PdSwiper--dot"></text>
        <text class="dot PdSwiper--dot"></text>
        <text class="dot PdSwiper--dot active PdSwiper--active"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-473 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-517 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-933 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-308 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-581 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-965 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-933 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-204 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-114 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-703 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-512 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-63 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-186 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-353 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-22 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-543 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-520 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-639 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/PdGuess" class="r">
    <view class="caption PdGuess--caption">
      <text class="text PdGuess--text sk-transparent sk-text-0-0000-158 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
    </view>
  </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-3-3333-425 {
    background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
    background-size: 100% 27.1739rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-268 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 38.0435rpx;
    position: relative !important;
  }
.sk-text-14-2857-473 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-517 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-933 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-308 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-581 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-965 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-204 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-114 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-703 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-512 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-63 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-186 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-353 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-22 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-543 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-520 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-639 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-0-0000-158 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.7971rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }
</style>