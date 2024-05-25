import React from "react"
import HomePage from "../pages/home"
import ShopPage from "../pages/ShopPage"

interface RouteItem{
    path: string,
    element: React.JSX.Element,
    label: string
}

export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <HomePage/>,
        label: "Home"
    },
    {
        path: "/shop/:category",
        element: <ShopPage/>,
        label: "shop"
    },
]