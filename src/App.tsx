import React from 'react';
import {useAppSelector} from "./hooks/reduxHooks";
import Header from "./layout/header";
import Button from "./components/elements/button";

const App = () => {

    const {hotels} = useAppSelector(state => state.hotels);

    return (
        <>
            <Header />
            <h3 className="font-bold underline">Hello</h3>
            <Button title='Test button' isDisabled={false}/>
        </>
    )
}

export default App