import { createBrowserRouter } from "react-router-dom";
import Mains from "../../Components/Main/Mains";
import Blog from "../../pagese/Blog/Blog";
import Home from "../../pagese/Home/Home";
import Login from "../../pagese/Login/Login";
import Register from "../../pagese/Register/Register";




export const router = createBrowserRouter([
    {
        path:'/',
        element: <Mains/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    }
])