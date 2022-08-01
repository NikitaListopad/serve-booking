import React, {useState} from 'react';
import Header from "./layout/header";
import HotelPage from "./components/hotelPage";
import Main from "./layout/main";
import BaseForm from "./components/baseForm";
import {HotelMocks} from "./mocks/hotelMocks";

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
                <ul>
                    {hotels.map(hotel => {
                        return (
                            <HotelPage hotel={hotel} />
                        )
                    })}
                </ul>
            </Main>

        </>
    )
}

export default App