import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
//import Header from './Components/Header/Header'
//import Footer from './Components/Footer/Footer'
//import About from './Components/AboutUs/AboutUs'
//import Contact from './Components/Contacts/Contacts'

import { Github } from './Components/Github/Github'
import { UserParams } from './Components/UserParams/UserParams'
const Header = lazy(() => import("./Components/Header/Header"))
const Footer = lazy(() => import("./Components/Footer/Footer"))
const About = lazy(() => import("./Components/AboutUs/AboutUs"))
const Contact = lazy(() => import("./Components/Contacts/Contacts"))
const BindedComponents = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <BindedComponents />,
    children: [{
      path: "about",
      element: <Suspense fallback={"Loading ..."}> <About /> </Suspense>,
    },
    {
      path: "contact",
      element: <Suspense fallback={"Loading ..."} ><Contact /></Suspense>,
    },
    {
      path: "",
      element: <Suspense fallback={"Loading ..."}> <Home /> </Suspense>,
    },
    {
      path: "user/:userinput",
      element: <Suspense fallback={"Loading ..."}> <UserParams /> </Suspense>,
    },
    {
      path: "github",
      element: <Github />,
    }
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
