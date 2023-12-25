
import {request} from "../utils";

// 1.登录请求
export function loginApi(formData) {
    // 返回的是promise ->res
    return request({
        url: '/login',
        method: 'POST',
        data: formData
    })
}

// 2.获取用户信息
export function getUserInfoApi() {
    // 返回的是promise ->res
    return request({
        url: '/info',
        method: 'GET'
    })
}