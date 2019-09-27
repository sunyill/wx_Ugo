<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 20:53:46
 * @LastEditTime: 2019-09-27 21:49:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="search" :class="{focused:focused}">
    <div class="input-box">
      <input type="text" @focus="goSearch" :placeholder="placeholder" />
      <span class="cancel" @click="cancleSearch">取消</span>
    </div>
    <!-- 显示搜索内容部分 -->
    <div class="content"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
           focused:false,
           placeholder:''
        }   
    },
    methods:{
       goSearch(){
           // 更新搜索框样式
           this.focused=true;
           this.placeholder="请输入你喜欢的商品";
           // 通过api 获取屏幕尺寸
           const {windowHeight} = wx.getSystemInfoSync()
           this.$emit('handleSearch',{
               windowHeight:windowHeight+"px"
           })
       },
       cancleSearch(){
           // 更新搜索框样式
           this.focused=false,
           this.placeholder="",
           this.$emit('handleSearch',{
               windowHeight:'auto'
           })
       } 
    }
    
}
</script>

<style lang="less">
.search {
  padding: 20rpx 30rpx;
  background-color: #4faf70;

  // 搜索状态
  &.focused {
    background-color: #eee;
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .input-box {
      &::before {
        display: block;
      }

      &:after {
        display: none;
      }

      .cancel {
        display: block;
      }
    }

    .content {
      display: block;
    }
  }

  .input-box {
    height: 60rpx;
    position: relative;
    display: flex;

    &::before {
      content: "";
      display: none;
      width: 30rpx;
      height: 30rpx;
      // wxss 不支持本地资源
      background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png);
      background-size: auto 30rpx;
      transform: translate(20rpx, -50%);

      position: absolute;
      left: 0%;
      top: 50%;
    }

    &::after {
      content: "搜索";
      display: block;
      height: 36rpx;
      line-height: 36rpx;
      padding-left: 50rpx;
      transform: translate(-50%, -50%);
      font-size: 24rpx;
      color: #bdbdbd;
      // wxss 不支持本地资源
      background-image: url(https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png);
      background-size: auto 30rpx;
      background-position: left center;
      background-repeat: no-repeat;

      position: absolute;
      left: 50%;
      top: 50%;
    }

    input {
      background-color: #fff;
      padding-left: 60rpx;
      border-radius: 8rpx;
      flex: 1;
      font-size: 25rpx;
      color: #808080;
    }

    .cancel {
      display: none;
      width: 100rpx;
      line-height: 60rpx;
      font-size: 30rpx;
      color: #333;
      text-align: right;
    }
  }

  .content {
    display: none;
    position: absolute;
    top: 100rpx;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
}
</style>


