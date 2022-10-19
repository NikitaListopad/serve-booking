import React from 'react';
import Layout from "./layout/layout";
import {Routes, Route} from "react-router-dom";
import HotelsList from "./components/hotelsList";
import HotelPage from "./components/hotelPage";
import ErrorPage from "./components/ErrorPage";

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<HotelsList />} />
                    <Route path='hotel/:id' element={<HotelPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App