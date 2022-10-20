import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import HotelList from "./components/HotelList";
import React from "react";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'
           element={<HotelList/>}
    >
    </Route>
))

export default router