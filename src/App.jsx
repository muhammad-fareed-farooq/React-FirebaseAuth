import React from 'react'
import Router_App from './pages/Config/Router_App'
import { BrowserRouter } from 'react-router-dom'
// import Heading from './Component/Heading'
// import ToDolist from './Component/ToDolist'
// import { BrowserRouter } from 'react-router-dom'
// import RouterApp from "./Config/Router_App"

export default function App() {
  return (
    // <div className='App font-Poppins container py-16 px-6 min-h-screen mx-auto'>
    //   {/* <Heading/> */}
    //   <ToDolist/>
    // </div>
    <BrowserRouter>
    
    <Router_App/>
    </BrowserRouter>
    
    
  )
}
