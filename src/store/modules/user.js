// 用户持久化信息

import {createSlice} from "@reduxjs/toolkit";
import {getToken, setToken as _setToken} from "../../utils";
import {loginApi} from "../../apis";

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        // 先从localStage中取
        token: getToken() || ''
    },
    // 同步修改方法
    reducers: {
        setToken(state,action){
            state.token = action.payload
            // 存入localStage
            _setToken(action.payload)
        },
    }
})

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 1.发送异步请求
        const res = await loginApi(loginForm)
        console.log("login返回的接口信息",res)
        // 2.提交同步action进行token存入
        dispatch(setToken(res.data.token))
    }
}
// 解构出actionCreater
const {setToken} = userStore.actions
// 获取reducer函数
const userReducer = userStore.reducer;


export {setToken,fetchLogin}

export default userReducer

