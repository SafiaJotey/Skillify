import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./home";
import Category from "./categoryDetails";
import CourseDetailsPage from "./courseDetails";
import AuthPage from "./auth/login";
import NotFoundPage from "./notFound";
import RegisterPage from "./auth/register";
import CoursesPage from "./courses";






export const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:`/category/:id`,
                element:<Category/>
            },
            {
                path:'/courseDetails/:id',
                element:<CourseDetailsPage/>
            },
            {
                path:'/courses',
                element:<CoursesPage/>
            },
            {
                path:'/auth/login',
                element:<AuthPage/>
            }, {
                path:'/auth/signup',
                element:<RegisterPage/>
            },
            // {
            //     path:'/form',
            //     element:<FormApp/>
            // }
        ],
    

},  {
    path:'*',
    element:<NotFoundPage/>
}


])

