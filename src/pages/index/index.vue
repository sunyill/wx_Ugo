<!--
 * @Description: 
 * @Author: your name
 * @Date: 2019-09-27 10:39:02
 * @LastEditTime: 2019-09-27 20:30:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <swiper
      :indicator-dots="true"
      indicator-color="rgba(255, 255, 255, .5)"
      indicator-active-color="#f00"
      autoplay
      interval="3000"
      duration="1000"
      circular
    >
      <swiper-item>
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
      <a href>
        <img src="/static/uploads/icon_index_nav_4@2x.png" alt />
      </a>
      <a href>
        <img src="/static/uploads/icon_index_nav_3@2x.png" alt />
      </a>
      <a href>
        <img src="/static/uploads/icon_index_nav_2@2x.png" alt />
      </a>
      <a href>
        <img src="/static/uploads/icon_index_nav_1@2x.png" alt />
      </a>
    </div>
    <!--楼层( 商品列表 )-->
    <div class="product">
      <div class="floor">
        <!-- 标题部分 -->
        <div class="title">
          <img src="/static/uploads/pic_floor01_title.png" />
        </div>
        <!-- 商品类别部分 -->
        <div class="items">
          <a href>
            <img src="/static/uploads/pic_floor01_1@2x.png" alt />
          </a>
          <a href>
            <img src="/static/uploads/pic_floor01_2@2x.png" alt />
          </a>
          <a href>
            <img src="/static/uploads/pic_floor01_3@2x.png" alt />
          </a>
          <a href>
            <img src="/static/uploads/pic_floor01_4@2x.png" alt />
          </a>
          <a href>
            <img src="/static/uploads/pic_floor01_5@2x.png" alt />
          </a>
        </div>

        <!-- 二标题部分 -->
        <div class="floor">
          <div class="title">
            <img src="/static/uploads/pic_floor02_title.png" />
          </div>
          <!-- 商品类别部分 -->
          <div class="items">
            <a href>
              <img src="/static/uploads/pic_floor02_1@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor02_2@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor02_3@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor02_4@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor02_5@2x.png" alt />
            </a>
          </div>
        </div>
        <!--三 标题部分 -->
        <div class="floor">
          <div class="title">
            <img src="/static/uploads/pic_floor03_title.png" />
          </div>
          <!-- 商品类别部分 -->
          <div class="items">
            <a href>
              <img src="/static/uploads/pic_floor03_1@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor03_2@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor03_3@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor03_4@2x.png" alt />
            </a>
            <a href>
              <img src="/static/uploads/pic_floor03_5@2x.png" alt />
            </a>
          </div>
        </div>
      </div>
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
.floor {
  &:first-child {
    .items {
      a {
        width: 233rpx;
        height: 188rpx;
      }
      a:first-child {
        width: 232rpx;
        height: 386rpx;
      }
    }
  }
  .title {
    height: 60rpx;
    padding: 32rpx 0 0 15rpx;
    background-color: #f4f4f4;
  }
  .items {
    overflow: hidden;
    padding: 20rpx 16rpx;
  }
  a {
    float: left;
    margin-left: 10rpx;
  }
  a:first-child {
    width: 232rpx;
    height: 386rpx;
    margin-left: 0;
  }
  a:nth-child(2),
  a:nth-child(5) {
    width: 273rpx;
    height: 188rpx;
  }
  a:nth-child(3),
  a:nth-child(4) {
    width: 193rpx;
    height: 188rpx;
  }
  a:nth-last-child(-n + 2) {
    margin-top: 10rpx;
  }
}
</style>
