import React from 'react';
import {useAppSelector} from "./hooks/reduxHooks";
import Header from "./layout/header";
import Button from "./components/elements/button";
import HotelPage from "./components/hotelPage";

const App = () => {

    const {hotels} = useAppSelector(state => state.hotels);

    return (
        <>
            <Header />
            <h3 className="font-bold underline">Hello</h3>
            <Button title='Test button' isDisabled={false}/>
            <HotelPage title='First hotel'
                       price='114'
                       photos={['https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg']}
            />
        </>
    )
}

export default App