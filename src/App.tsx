import React, {useEffect} from 'react';
import Header from "./layout/header";
import Main from "./layout/main";
import HotelsList from "./components/hotelsList";
import ModalContainer from "./components/modal/ModalContainer";
import {EffectCallback} from "./types/EffectCallback";
import {useActions, useTypedSelector} from "./hooks/reduxHooks";
import {fetchHotels} from "./store/actions/hotelsAction";
import {Route, Routes} from "react-router-dom";


const App = () => {

    const {fetchHotels} = useActions();

    const {hotels} = useTypedSelector(state => state.hotels);
    const {isOpen} = useTypedSelector(state => state.modal);

    useEffect((): EffectCallback => {
        if(isOpen) document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'visible'
    }, [isOpen]);

    useEffect(() => {
        fetchHotels();
    }, [])

    return (
        <>
            <Header />
                <Routes>
                    <Route path='/' element={
                        <Main>
                            <HotelsList hotels={hotels} />
                        </Main>
                    } />
            <Route path='test' element={<h1>Hello test</h1>} />
            </Routes>

            <ModalContainer />
        </>
    )
}

export default App