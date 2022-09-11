import React, {useEffect, useMemo, useState} from 'react';
import Header from "./layout/header";
import Main from "./layout/main";
import {HotelMocks} from "./mocks/hotelMocks";
import HotelsList from "./components/hotelsList";
import HotelFilter from "./components/hotelsFilter";
import ModalSearch from "./components/modalSearch";
import {EffectCallback} from "./types/EffectCallback";

const mock = new HotelMocks()
const mocks = mock.generateHotelsArray(15);

const App = () => {

    const [isPriceSelected, setIsPriceSelected] = useState(false);
    const [isTitleSelected, setIsTitleSelected] = useState(false);
    const [isModalHidden, setIsModalHidden] = useState(false);

    useEffect((): EffectCallback => {
        if(isModalHidden) document.body.style.overflow = 'hidden'

        return () => document.body.style.overflow = 'visible'
    }, [isModalHidden]);


    const selectPriceFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsPriceSelected(prev => !prev);
    }

    const selectTitleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {-

        setIsTitleSelected(prev => !prev);
    }

    const hotels = useMemo(() => mock.getFilterHotels(isPriceSelected, isTitleSelected, mocks), [isPriceSelected, isTitleSelected]);

    return (
        <>
            <Header onSearchClick={() => setIsModalHidden(true)}/>
            <Main>
                {/*<HotelFilter onPriceSelect={selectPriceFilter} onTitleSelect={selectTitleFilter}/>*/}
                <HotelsList hotels={hotels} />
            </Main>
            <ModalSearch isHidden={isModalHidden}  onCloseClick={() => setIsModalHidden(false)}/>
        </>
    )
}

export default App