import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Intro from "../pages/Intro/Intro";
import Home from "../pages/Home/Home";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Intro />,
                },
                {
                    path: "/homepage",
                    element: <Home />,
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Router;
