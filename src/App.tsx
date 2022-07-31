import React from 'react';
import {useAppSelector} from "./hooks/reduxHooks";
import Header from "./layout/header";
import HotelPage from "./components/hotelPage";
import Main from "./layout/main";

const App = () => {

    const {hotels} = useAppSelector(state => state.hotels);

    return (
        <>
            <Header />
            <Main>
                <HotelPage title='First hotel'
                           price='114'
                           photo={'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'}
                />
            </Main>

        </>
    )
}

export default App