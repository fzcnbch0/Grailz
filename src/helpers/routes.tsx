import React from "react"
import HomePage from "../pages/home"
import ShopPage from "../pages/ShopPage"
import AccountPage from "../pages/account"
import ItemPage from "../pages/item"
//import ItemDetails from "../pages/itemDetail"
import LogPage from "../pages/loginPage"
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
    {
        path: "/account/:id",
        element: <AccountPage/>,
        label: "account"
    },
    {
        path: "/items/:id",
        element: <ItemPage/>,
        label: "account"
    },
    {
        path: "/login",
        element: <LogPage/>,
        label: "account"
    },
]