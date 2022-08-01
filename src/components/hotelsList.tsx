import React, {FC} from "react";
import HotelBlock from "./hotelBlock";
import {IHotel} from "../types/IHotel";
import styles from './hotelsList.module.scss';

interface HotelListProps {
    hotels: IHotel[];
}

const HotelsList: FC<HotelListProps> = (props: HotelListProps) => {

    const {hotels} = props;

    return (
        <ul className={styles.hotelsListContainer}>
            {hotels.map(hotel => {
                return (
                    <HotelBlock hotel={hotel} />
                )
            })}
        </ul>
    )
}

export default HotelsList;