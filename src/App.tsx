import React from 'react';
import {useAppSelector} from "./hooks/reduxHooks";
import Header from "./layout/header";

const App = () => {

    const {hotels} = useAppSelector(state => state.hotels);

    return (
        <>
            <Header />
            <h3 className="font-bold underline">Hello</h3>
        </>
    )
}

export default App