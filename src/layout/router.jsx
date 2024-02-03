import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import AllUser from "../pages/dashboard/AllUser";
import PrivateRoute from "../components/shared/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoute>
                <AllUser />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
