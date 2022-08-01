import React, {useState} from 'react';
import Header from "./layout/header";
import HotelBlock from "./components/hotelBlock";
import Main from "./layout/main";
import BaseForm from "./components/baseForm";
import {HotelMocks} from "./mocks/hotelMocks";
import HotelsList from "./components/hotelsList";

const App = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setSearchValue(e.target.value);
    }

    const hotels = new HotelMocks().generateHotelsArray(14);

    return (
        <>
            <Header />
            <Main>
                <BaseForm
                    name='first'
                    handleSubmit={handleSearchSubmit}
                    handleChange={handleSearchChange}
                    inputValue={searchValue}
                />
               <HotelsList hotels={hotels} />
            </Main>

        </>
    )
}

export default App