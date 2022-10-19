import React, {FC} from "react";
import styles from './hotelItem.module.scss'
import {IHotel} from "../types/IHotel";
import {NavLink} from "react-router-dom";


interface HotelPageProps {
    hotel: IHotel
}

const HotelItem: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photo, id} = props.hotel;

    return (
        <NavLink to={`/hotel/${id}`} className={styles.mainHotel}>
            <img src={photo} alt="hotel" className={styles.hotelPhoto}/>
            <div className={styles.description}>
                <div className={styles.hotelTitleContainer}>{title}</div>
                <p className={styles.hotelPrice}>${price} / night</p>
            </div>
        </NavLink>
    )
}


export default HotelItem;