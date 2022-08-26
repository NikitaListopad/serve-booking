import React, {useMemo, useState} from 'react';
import Header from "./layout/header";
import Main from "./layout/main";
import {HotelMocks} from "./mocks/hotelMocks";
import HotelsList from "./components/hotelsList";
import HotelFilter from "./components/hotelsFilter";

const App = () => {

    const [isPriceSelected, setIsPriceSelected] = useState(false);
    const [isTitleSelected, setIsTitleSelected] = useState(false);

    const selectPriceFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsPriceSelected(prev => !prev);
    }

    const selectTitleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsTitleSelected(prev => !prev);
    }

    const hotels = useMemo(() => new HotelMocks().getFilterHotels(isPriceSelected, isTitleSelected), [isPriceSelected, isTitleSelected]);


    return (
        <>
            <Header />
            <Main>
                <HotelFilter onPriceSelect={selectPriceFilter} onTitleSelect={selectTitleFilter}/>
               <HotelsList hotels={hotels} />
            </Main>

        </>
    )
}

export default App