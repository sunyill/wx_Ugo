<!--
 * @Description: 
 * @Author: your name
 * @Date: 2019-09-27 10:39:02
 * @LastEditTime: 2019-09-28 21:37:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :style="{height:windowHeight, overflow:'hidden'}">
    <!-- // 搜索部分 -->
    <SearchInfo @handleSearch="doSearch" />
    <swiper
      :indicator-dots="true"
      indicator-color="rgba(255, 255, 255, .5)"
      indicator-active-color="#f00"
      autoplay
      interval="3000"
      duration="1000"
      circular
    >
      <swiper-item :key="bannerimg.goods_id" v-for="bannerimg in bannerList">
        <a href="#">
          <img :src="bannerimg.image_src" />
        </a>
      </swiper-item>
    </swiper>
    <!-- 主导航 -->
    <div class="navs">
      <a href v-for="(navs,index) in navsList" :key="index">
        <img :src="navs.image_src" alt />
      </a>
    </div>
    <!--楼层( 商品列表 )-->
    <div class="product">
      <div class="floor" v-for="(floor,index) in productFloor" :key="index">
        <!-- 标题部分 -->
        <div class="title">
          <img :src="floor.floor_title.image_src" />
        </div>
        <!-- 商品类别部分 -->
        <div class="items">
          <a href v-for="(product,key) in floor.product_list" :key="key">
            <img :src="product.image_src" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <p class="goTop" @click="goTop" v-show="scrollTop>200">☺</p>
  </div>
</template>

  

<script>
import SearchInfo from "@/components/searchinfo";
import request from "@/utils/request";
export default {
  components: {
    SearchInfo
  },
  data() {
    return {
      windowHeight: "auto",
      // 轮播图数据
      bannerList: [],
      // 首页分类数据
      navsList: [],
      // 获取商品楼层
      productFloor: [],
      // 滚动的距离
      scrollTop:0
    };
  },

  methods: {
    doSearch(event) {
      console.log(event);
      this.windowHeight = event.windowHeight;
    },
    // 回到顶部
    goTop(){
      // 根据pageScrollTo 来设置页面滑动距离,当高度为0, 即为到顶部
      mpvue.pageScrollTo({scrollTop:0})
    },
    // 获取轮播图info
    async getBannerList() {
      const { message } = await request({
        url: "/api/public/v1/home/swiperdata"
      });
      this.bannerList = message;
    },
    async getNavList() {
      const { message } = await request({
        url: "/api/public/v1/home/catitems"
      });
      this.navsList = message;
    },
    async getProduct() {
      const { message } = await request({
        url: "/api/public/v1/home/floordata"
      });
      this.productFloor = message;
    }
  },
  mounted() {
    this.getBannerList();
    this.getNavList();
    this.getProduct();
  },
  // 页面上拉触底事件的处理函数
  onReachBottom() {
    console.log("你在滑动屏幕呢~~");
  },
  // 监听用户下拉动作
  async onPullDownRefresh(ev){
    await this.getBannerList();
    await this.getNavList();
    await this.getProduct();

    // 触发下拉的动画效果
    mpvue.stopPullDownRefresh();
  },
  // 页面滚动触发事件的处理函数
  onPageScroll(ev){
    // console.log(ev);
    this.scrollTop = ev.scrollTop
  },
  onShareAppMessage(){
    return {
      title:"小伙伴们,一起玩王者荣耀吧",
      path: '/pages/index/main',
        imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569672080944&di=4096b3b19485ca0fa468c9c9fac258ae&imgtype=0&src=http%3A%2F%2Fwww.999zx.cn%2Fadm_file%2Ffck%2Fimages%2F2018%2F4%2FImage%2F20184386447866.jpg'
    };
  }
  
};
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
    padding: 20rpx 16rpx;
    overflow: hidden;
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
  .items a:nth-child(2),
  .items a:nth-child(5) {
    width: 273rpx;
    height: 188rpx;
  }

  .items a:nth-child(3),
  .items a:nth-child(4) {
    width: 193rpx;
    height: 188rpx;
  }
  a:nth-last-child(-n + 2) {
    margin-top: 10rpx;
  }
}
.goTop {
    position: fixed;
    right: 40rpx;
    bottom: 40rpx;

    width: 100rpx;
    height: 100rpx;
    background-color: rgba(241, 9, 48, 0.7);
    border-radius: 50%;
  }
</style>
