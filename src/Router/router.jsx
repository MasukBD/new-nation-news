import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage";
import Catagory from "../Pages/Catagory/Catagory";
import NewsLayout from "../Layout/NewsLayout";
import NewsPage from "../Pages/NewsPage/NewsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/catagories/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <NewsPage></NewsPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;