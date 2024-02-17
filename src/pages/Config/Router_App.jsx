import React from "react";
import { Route, Routes, } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";
import ToDolist from "../../Component/ToDolist";
// import { BrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter(
//   createRoutesFromElements(

//   )
// )

const Router_App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/todo" element={<ToDolist/>}/>
      </Routes>
    {/* <RouterProvider router={router}/> */}
    </>
  );
};

export default Router_App;
