import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorElement />,
        children: [{
            path: '/',
            element: <Home />
        }]
    }
])