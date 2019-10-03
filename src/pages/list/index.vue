<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-28 22:53:31
 * @LastEditTime: 2019-10-03 21:56:11
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div>
    <!-- 筛选 -->
    <div class="filter">
      <span class="active">综合</span>
      <span>销量</span>
      <span>价格</span>
    </div>
    <!-- 商品列表 -->
    <scroll-view class="goods" scroll-y>
      <div class="item" v-for="goods in goodList" :key="goods.goods_id">
        <!-- 商品图片 -->
        <image class="pic" :src="goods.goods_small_logo"></image>
        <!-- 商品信息 -->
        <div class="meta">
          <p class="name">{{goods.goods_name}}</p>
          <p class="price"><span>￥</span>{{goods.goods_price}}<span>.00</span></p>
        </div>
      </div>
      <div class="haveNoThing" v-show="!goodList.length">没有更多商品</div>
    </scroll-view>
  </div>
</template>

<style scoped lang="less">

  .filter {
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1rpx solid #ddd;

    span {
      flex: 1;
      text-align: center;
      font-size: 30rpx;
      color: #333;

      &.active {
        color: #ea4451;
      }
    }
  }
  
  .goods {
    position: absolute;
    width: 100%;
    top: 97rpx;
    bottom: 0;
  }

  .item {
    display: flex;
    padding: 30rpx 20rpx 30rpx 0;
    margin-left: 20rpx;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .pic {
      width: 200rpx;
      height: 200rpx;
      margin-right: 30rpx;
    }

    .meta {
      flex: 1;
      font-size: 27rpx;
      color: #333;
      position: relative;
    }

    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      position: absolute;
      bottom: 0;

      color: #ea4451;
      font-size: 33rpx;

      span {
        font-size: 22rpx;
      }
    }
  }
  .haveNoThing {
    text-align: center;
    margin-top: 140rpx;
    font-size: 36rpx;
    color: #ea4451;
  }

</style>

<script>
import request from '../../utils/request'
export default {
  data(){
    return {
      goodList:[]
    }
  },
  methods:{
    async getMoreGoods(data){
      const {message} = await request({
        url: '/api/public/v1/goods/search',
        data
      })
      this.goodList = message.goods
    }
  },
  onLoad(query){
    this.query = query;  
    this.getMoreGoods(query)
    }  
  }
</script>