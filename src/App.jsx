import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creation from "../Screens/creation";
import Login from "../Screens/login";
import Reset from "../Screens/reset";
import Forgot from "../Screens/forgot";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/creation' element={ <Creation/>}/>
        <Route path='/forgot' element={ <Forgot/>}/>
        <Route path='/reset' element={ <Reset/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
