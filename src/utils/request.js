import { request } from "http";

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-28 10:33:01
 * @LastEditTime: 2019-09-28 19:15:01
 * @LastEditors: Please set LastEditors
 */
export default function (obj) {
    let url = obj.url || '';
    let data = obj.data || {};
    let method = obj.method || 'get';
    url = 'https://www.zhengzhicheng.cn' + url;
    //显示加载状态
   
    return new Promise((resolve, rejected) => {
        mpvue.showLoading({
            title:"正在加载中..."
        })
        mpvue.request({
            url,
            data,
            method,
            success(info) {
                resolve(info.data)
                // 加载完数据后, 关闭加载
                mpvue.hideLoading()
            }
        })
    })
}