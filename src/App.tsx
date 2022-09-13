import React, {useEffect, useMemo, useState} from 'react';
import Header from "./layout/header";
import Main from "./layout/main";
import {HotelMocks} from "./mocks/hotelMocks";
import HotelsList from "./components/hotelsList";
import ModalSearch from "./components/modalSearch";
import {EffectCallback} from "./types/EffectCallback";
import {useActions, useTypedSelector} from "./hooks/reduxHooks";
import {fetchHotels} from "./store/actions/hotelsAction";


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
            <Main>
                <HotelsList hotels={hotels} />
            </Main>
            <ModalSearch isHidden={isModalHidden}  onCloseClick={() => setIsModalHidden(false)}/>
        </>
    )
}

export default App