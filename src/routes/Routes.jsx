import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Secret from "../pages/Secret";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/ourMenu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
         {
          path:'/register',
          element:<Register></Register>
        },
         {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
  },
]);

export default router;