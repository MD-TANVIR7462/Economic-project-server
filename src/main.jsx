import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Home/Homepage.jsx';
import ShopPage from './Pages/ShopPage/ShopPage.jsx';
import ShowDetails from './Components/ShoeDetailsComponents/ShowDetails.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Authprovider from './Components/Provider/Authprovider.jsx';
import BlogPage from './Pages/BlogPage/BlogPage.jsx';
import Contact from './Pages/ContactPage/Contact.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import DashboardHome from './Dashboard/DashbordHome/DashboardHome.jsx';



// import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "/shop/:cetegory",
        element: <ShopPage></ShopPage>
      },
      {
        path: `/details/:id`,
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>

      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      
    ]

  },

  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard",
        element: <DashboardHome></DashboardHome>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
