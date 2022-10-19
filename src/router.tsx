import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import HotelsList from "./components/hotelsList";
import React from "react";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'
           element={<HotelsList/>}
    >
    </Route>
))

export default router