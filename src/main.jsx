import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/Providers/AuthProvider';
import ErrorPage from './Components/ErrorPage';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import AddSpots from './Components/AddSpots';
import SpotDetails from './Components/SpotDetails';
import PrivateRoute from './Components/PrivateRoute';
import Spots from './Components/Spots';
import MyList from './Components/MyList';
import UpdateSpot from './Components/UpdateSpot';
import CountrySpots from './Components/CountrySpot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://explore-world-orpin.vercel.app/spotsSample')
      },
      {
        path: '/spot/:id',
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://explore-world-orpin.vercel.app/spot/${params.id}`)
      },
      {
        path: '/add',
        element: <PrivateRoute><AddSpots></AddSpots></PrivateRoute>
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) => fetch(`https://explore-world-orpin.vercel.app/spot/${params.id}`)
      },
      {
        path: '/mylist',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/all',
        element: <Spots></Spots>,
        loader: () => fetch('https://explore-world-orpin.vercel.app/spots')
      },
      {
        path: 'spots/:countryName',
        element: <CountrySpots></CountrySpots>,
        loader: ({ params }) => fetch(`https://explore-world-orpin.vercel.app/spots/country/${params.countryName}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
