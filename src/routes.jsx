import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HauweiServices from "./pages/HauweiServices"
import HauweiServicesClaud from "./pages/HauweiServicesClaud"
import HauweiConnect from "./pages/HauweiConnect"


export const RoutesJS = () => {
   return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HauweiServices />} />
        <Route path="/hauweiservicesclaud" element={<HauweiServicesClaud/>} />
        <Route path="/hauweiconnect" element={<HauweiConnect/>} />
      </Routes>
    </BrowserRouter>
   )
}