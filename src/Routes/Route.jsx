import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Contact from "../page/Contact/Contact";
import Service from "../page/Service/Service";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: 'home',
                element: <Home />

            },
            {
                path: 'contact',
                element: <Contact />

            },
            {
                path: 'service',
                element: <Service />

            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router;