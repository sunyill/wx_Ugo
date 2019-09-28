/*
 * @Description: 商品分类 
 * @Author: your name
 * @Date: 2019-09-28 20:55:54
 * @LastEditTime: 2019-09-28 20:56:46
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
