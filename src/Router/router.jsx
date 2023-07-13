import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layout/NewsLayout";
import NewsPage from "../Pages/NewsPage/NewsPage";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import PrivateRoute from "./PrivateRoute";
import TermsCondition from "../Pages/TermsCondition";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('https://new-nation-news-server.vercel.app/news')
            },
            {
                path: '/catagories/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`https://new-nation-news-server.vercel.app/catagories/${params.id}`)
            },
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsPage></NewsPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://new-nation-news-server.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/terms',
        element: <TermsCondition></TermsCondition>
    }
])

export default router;