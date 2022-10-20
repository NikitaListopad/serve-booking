import React, {FC, useEffect} from "react";
import HotelBlock from "./HotelItem";
import styles from './HotelsList.module.scss';
import {useActions, useTypedSelector} from "../hooks/reduxHooks";

const HotelList: FC = () => {

    const {hotels} = useTypedSelector(state => state.hotels);

    const {fetchHotels} = useActions();

    useEffect(() => {
        fetchHotels();
    }, []);

    return (
        <ul className={styles.hotelsListContainer}>
            {hotels.map(hotel => {
                return (
                    <HotelBlock hotel={hotel} key={hotel.id}/>
                )
            })}
        </ul>
    )
}

export default HotelList;