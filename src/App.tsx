import React from 'react';
import Layout from "./layout/Layout";
import {Routes, Route} from "react-router-dom";
import HotelList from "./components/HotelList";
import HotelPage from "./components/HotelPage";
import ErrorPage from "./components/ErrorPage";

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<HotelList />} />
                    <Route path='hotel/:id' element={<HotelPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App