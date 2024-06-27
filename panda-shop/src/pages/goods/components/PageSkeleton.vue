<template name="skeleton">
  <view class="sk-container">
    <vk-data-goods-sku-popup class="r"></vk-data-goods-sku-popup>
    <scroll-view scroll-y="true" class="viewport">
      <view class="goods">
        <view class="preview">
          <swiper circular="true" current="0" autoplay="false">
            <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta">
          <view class="price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-606 sk-text">99.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-246 sk-text">ins风小碎花泡泡袖衬110-160cm</view>
          <view class="desc sk-transparent sk-text-0-0000-575 sk-text">全棉面料，高支高密底布，手感柔软舒适，贴身穿着亲肤透气；经典娃娃衫，泡泡袖设计，增添可爱蓬松感；后背全开门襟，方便穿脱。app</view>
        </view>
        <view class="action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-987 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-952 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-525 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-805 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-578 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-991 sk-text"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>
      <view class="detail panel">
        <view class="title">
          <text class="sk-transparent sk-text-0-0000-124 sk-text">详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <view class="item">
              <text class="label sk-transparent sk-text-25-0000-53 sk-text">适用年龄</text>
              <text class="value sk-transparent sk-text-25-0000-542 sk-text">12-16岁、9-12岁、6-9岁、3-6岁、1-3岁</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar" style="padding-bottom:34px">
      <view class="icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button>
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服 </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车 </navigator>
      </view>
      <view class="buttons">
        <view class="addcart sk-transparent sk-text-32-0513-169 sk-text" style="background-position-x: 50%;"> 加入购物车 </view>
        <view class="buynow sk-transparent sk-text-32-0513-727 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-606 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 76.0870rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-246 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-0-0000-575 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 23.5507rpx;
    position: relative !important;
  }
.sk-text-14-2857-987 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-952 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-525 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-805 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-578 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-991 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-0-0000-124 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 27.1739rpx;
    position: relative !important;
  }
.sk-text-25-0000-53 {
    background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
    background-size: 100% 50.7246rpx;
    position: relative !important;
  }
.sk-text-25-0000-542 {
    background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
    background-size: 100% 50.7246rpx;
    position: relative !important;
  }
.sk-text-32-0513-169 {
    background-image: linear-gradient(transparent 32.0513%, #EEEEEE 0%, #EEEEEE 67.9487%, transparent 0%) !important;
    background-size: 100% 70.6522rpx;
    position: relative !important;
  }
.sk-text-32-0513-727 {
    background-image: linear-gradient(transparent 32.0513%, #EEEEEE 0%, #EEEEEE 67.9487%, transparent 0%) !important;
    background-size: 100% 70.6522rpx;
    position: relative !important;
  }
.sk-button {
    color: #EFEFEF !important;
    background: #EFEFEF !important;
    border: none !important;
    box-shadow: none !important;
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