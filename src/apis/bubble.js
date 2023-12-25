import {request} from "../utils";

// 1.获取用户待办事项列表请求
export function getBubbleListApi(userId) {
    // 返回的是promise ->res
    return request({
        url: `/todo/list/${userId}`,
        method: 'GET',
    })
}

// 2.新增待办事项请求请求
export function addBubbleApi(data) {
    // 返回的是promise ->res
    return request({
        url: `/todo/add`,
        method: 'POST',
        data: data
    })
}

// 3.删除待办事项请求请求
export function delBubbleApi(id) {
    // 返回的是promise ->res
    return request({
        url: `/todo/${id}`,
        method: 'DELETE'
    })
}

// 4.新增待办事项请求请求
export function updateBubbleApi(id, status) {
    // 返回的是promise ->res
    return request({
        url: `/todo/${id}/${status}`,
        method: 'PUT'
    })
}