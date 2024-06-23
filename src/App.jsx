import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import MainBody from './components/MainBody';
import CreateQuote from './components/CreateQuote';

const App = () => {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/home",
      element: <HomePage />,
      children: [
        {
          path: "/home",
          element: <MainBody />
        },
        {
          path: "/home/create",
          element: <CreateQuote />
        }

      ]
    }
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App