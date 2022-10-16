import React, {useEffect, useState} from 'react';
import Header from "./layout/header";
import Main from "./layout/main";
import HotelsList from "./components/hotelsList";
import ModalContainer from "./components/modal/ModalContainer";
import {EffectCallback} from "./types/EffectCallback";
import {useActions, useTypedSelector} from "./hooks/reduxHooks";
import {fetchHotels} from "./store/actions/hotelsAction";
import Filters from "./components/filters";
import {Route, Routes} from "react-router-dom";


const App = () => {

    const [isModalHidden, setIsModalHidden] = useState(false);

    const {fetchHotels} = useActions();

    const {hotels} = useTypedSelector(state => state.hotels);

    useEffect((): EffectCallback => {
        if(isModalHidden) document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'visible'
    }, [isModalHidden]);

    useEffect(() => {
        fetchHotels();
    }, [])

    return (
        <>
            <Header onSearchClick={() => setIsModalHidden(true)}/>
                <Routes>
                    <Route path='/' element={
                        <Main>
                            <HotelsList hotels={hotels} />
                        </Main>
                    } />
            <Route path='test' element={<h1>Hello test</h1>} />
            </Routes>

            <ModalContainer
            isHidden={isModalHidden}
            onCloseClick={() => setIsModalHidden(false)}
                children={<Filters />}
            />
        </>
    )
}

export default App