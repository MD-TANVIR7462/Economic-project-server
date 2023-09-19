import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage.jsx";
import ShopPage from "./Pages/ShopPage/ShopPage.jsx";
import ShowDetails from "./Components/ShoeDetailsComponents/ShowDetails.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./Components/Provider/Authprovider.jsx";
import BlogPage from "./Pages/BlogPage/BlogPage.jsx";
import Contact from "./Pages/ContactPage/Contact.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import DashboardHome from "./Dashboard/DashbordHome/DashboardHome.jsx";
import AddaProduct from "./Dashboard/AdminDashRoutes/AddaProduct/AddaProduct.jsx";
import MyProducts from "./Dashboard/AdminDashRoutes/MyProducts/MyProducts.jsx";
import OrderPage from "./Dashboard/UserPages/OrderPage/OrderPage.jsx";
import ManageUser from "./Dashboard/AdminDashRoutes/MenageUsers/ManageUser.jsx";
import Payments from "./Dashboard/UserPages/PaymentPage/Payments.jsx";
import RouteGuard from "./RoutGourds/RouteGuard.jsx";
import { HelmetProvider } from "react-helmet-async";
import Error from "./Pages/ErrorPage/Error.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/shop/:cetegory",
        element: <ShopPage></ShopPage>,
      },
      {
        path: `/details/:id`,
        element: (
          <RouteGuard>
            <ShowDetails></ShowDetails>
          </RouteGuard>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ecommerce-projects-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <RouteGuard>
        <Dashboard></Dashboard>
      </RouteGuard>
    ),
    errorElement:<Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: (
          <RouteGuard>
            {" "}
            <DashboardHome></DashboardHome>
          </RouteGuard>
        ),
      },

      {
        path: "/dashboard/orders",
        element: (
          <RouteGuard>
            {" "}
            <OrderPage></OrderPage>
          </RouteGuard>
        ),
      },
      {
        path: "/dashboard/payments",
        element: (
          <RouteGuard>
            {" "}
            <Payments></Payments>
          </RouteGuard>
        ),
      },
      //admin routes//
      {
        path: "/dashboard/addaProduct",
        element: (
          <RouteGuard isAdminRoute>
            {" "}
            <AddaProduct></AddaProduct>
          </RouteGuard>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <RouteGuard isAdminRoute>
            {" "}
            <MyProducts></MyProducts>
          </RouteGuard>
        ),
      },

      {
        path: "/dashboard/ManageUser",
        element: (
          <RouteGuard isAdminRoute>
            {" "}
            <ManageUser></ManageUser>
          </RouteGuard>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router} />
        </Authprovider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
