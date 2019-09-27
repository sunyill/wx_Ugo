<!--
 * @Description: 
 * @Author: your name
 * @Date: 2019-09-27 10:39:02
 * @LastEditTime: 2019-09-27 18:45:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>  
    <swiper :indicator-dots="true" indicator-color="rgba(255, 255, 255, .5)" indicator-active-color="#f00" autoplay interval="3000" duration="1000" circular>
      <swiper-item >
        <a href="#">
          <img src="../../../static/uploads/banner1.png" />
        </a>
      </swiper-item>
      <swiper-item>
        <a href="#">
          <img src="../../../static/uploads/banner2.png" />
        </a>
      </swiper-item>
      <swiper-item>
        <a href="#">
          <img src="../../../static/uploads/banner3.png" />
        </a>
      </swiper-item>
    </swiper>
    <!-- 主导航 -->
    <div class="navs">
      <a href="">
        <img src="/static/uploads/icon_index_nav_4@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_3@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_2@2x.png" alt="">
      </a>
      <a href="">
        <img src="/static/uploads/icon_index_nav_1@2x.png" alt="">
      </a>
    </div>
   </div>
</template>

  

<script>
export default {};
</script>

<style scoped lang="less">
  swiper {
    height: 340rpx;
    
  }
  swiper a {
      height: 100%;
      width: 100%;
  }
  // 主导航
  .navs {
    height: 192rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30rpx;
  }
  .navs a {
    display: block;
    height: 140rpx;
    width: 128rpx;

  }

</style>
