import React, {useMemo, useState} from 'react';
import Header from "./layout/header";
import HotelBlock from "./components/hotelBlock";
import Main from "./layout/main";
import BaseForm from "./components/baseForm";
import {HotelMocks} from "./mocks/hotelMocks";
import HotelsList from "./components/hotelsList";
import HotelFilter from "./components/hotelsFilter";

const App = () => {

    const [isPriceSelected, setIsPriceSelected] = useState(false);
    const [isTitleSelected, setIsTitleSelected] = useState(false);

    // const [searchValue, setSearchValue] = useState('');
    //
    // const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    // }
    //
    // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //
    //     setSearchValue(e.target.value);
    // }

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
                {/*<BaseForm*/}
                {/*    name='first'*/}
                {/*    handleSubmit={handleSearchSubmit}*/}
                {/*    handleChange={handleSearchChange}*/}
                {/*    inputValue={searchValue}*/}
                {/*/>*/}
               <HotelsList hotels={hotels} />
            </Main>

        </>
    )
}

export default App