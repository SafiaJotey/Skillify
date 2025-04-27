import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./home";





export const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]

}


])

