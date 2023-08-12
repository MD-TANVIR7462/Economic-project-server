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
        loader : ({params})=>fetch(`http://localhost:5000/details/${params.id}`) 
      },
      // {
      //   path:'/login',
      //   element : <Login></Login>
      // }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
