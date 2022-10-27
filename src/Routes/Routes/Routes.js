import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Premium from "../../Pages/Prmium/Premium";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: '/',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/learning-categories')
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/category/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/learning-categories/${params.id}`)
            },
            {
                path: '/category/:id/premium',
                element: <PrivateRoute><Premium /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/learning-categories/${params.id}`)
            }
        ]
    }
])