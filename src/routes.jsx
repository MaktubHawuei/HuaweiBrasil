import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HauweiServices from "./pages/HauweiServices"


export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HauweiServices />} />
      </Routes>
    </BrowserRouter>
   )
}