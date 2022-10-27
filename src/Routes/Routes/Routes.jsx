import { createBrowserRouter } from "react-router-dom";
import Mains from "../../Components/Main/Mains";
import Blog from "../../pagese/Blog/Blog";
import Courses from "../../pagese/Courses/Courses";
import SingleCourse from "../../pagese/Courses/SingleCourse/SingleCourse";
import UserAccess from "../../pagese/Courses/UserAccess/UserAccess";
import ErrorPage from "../../pagese/ErrorPage/ErrorPage";
import Footer from "../../pagese/Footer/Footer";
import Home from "../../pagese/Home/Home";
import Login from "../../pagese/Login/Login";
import Register from "../../pagese/Register/Register";
import PrivateRoute from "../../PriveteRoute/PrivateRoute";




export const router = createBrowserRouter([
    {
        path:'/',
        element: <Mains/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                
                loader: ()=>fetch('https://e-learning-coral.vercel.app/courses/')
            },
            {
                path:'/courses',
                element:<Courses/>,
                loader: ()=>fetch('https://e-learning-coral.vercel.app/courses/')
            },
            {
                path:'/courses/:id',
                element: <SingleCourse/>,
                loader: ({params})=>fetch(`https://e-learning-coral.vercel.app/courses/${params.id}`)

            },
            {
                path:'/access/:id',
                element: <PrivateRoute><UserAccess/></PrivateRoute>,
                loader: ({params})=>fetch(`https://e-learning-coral.vercel.app/courses/${params.id}`)

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
            },
            {
                path: '/footer',
                element: <Footer/>
            }
        ]
    }
])