import React, {FC} from "react";
import styles from './hotelPageStyles.module.scss'
import {IHotel} from "../types/IHotel";


interface HotelPageProps {
    hotel: IHotel
}

const HotelItem: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photo} = props.hotel;

    return (
        <li className={styles.mainHotel}>
            <img src={photo} alt="hotel" className={styles.hotelPhoto}/>
            <div className={styles.description}>
                <div className={styles.hotelTitleContainer}>{title}</div>
                <p className={styles.hotelPrice}>${price} / night</p>
            </div>
        </li>
    )
}


export default HotelItem;