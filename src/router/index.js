// 配置路由实例
import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import Bubble from "../pages/Bubble";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Bubble/>
    },
    {
        path:'/login',
        element:<Login/>
    }
])

export default router