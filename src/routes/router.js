import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Courses from "../components/Courses/Courses";
import Error from "../components/Error/Error";
import Faq from "../components/Faq/Faq";
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CheckOut from "../components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/courses",
                loader: () => fetch('https://eduline-server.vercel.app/courses'),
                element: <Courses />
            },
            {
                path: "/course-details/:id",
                loader: ({ params }) => fetch(`https://eduline-server.vercel.app/course-details/${params.id}`),
                element: <CourseDetails />
            },
            {
                path: "/faq",
                loader: () => fetch('https://eduline-server.vercel.app/faq'),
                element: <Faq />
            },
            {
                path: "/blog",
                loader: () => fetch('https://eduline-server.vercel.app/blog'),
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
            {
                path: "/checkout/:id",
                loader: ({ params }) => fetch(`https://eduline-server.vercel.app/course-details/${params.id}`),
                element:
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>
            }
        ]
    }
])