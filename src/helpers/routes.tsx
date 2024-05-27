import React from "react"
import HomePage from "../pages/home"
import ShopPage from "../pages/ShopPage"
import AccountPage from "../pages/account"
import ItemPage from "../pages/item"
//import ItemDetails from "../pages/itemDetail"

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
        path: "/account",
        element: <AccountPage/>,
        label: "account"
    },
    {
        path: "/items/:id",
        element: <ItemPage/>,
       label: "account"
    },
]