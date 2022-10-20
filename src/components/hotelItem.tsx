import React, {FC} from "react";
import styles from './hotelItem.module.scss'
import {IHotel} from "../types/IHotel";
import CustomLink from "./elements/CustomLink";


interface HotelPageProps {
    hotel: IHotel
}

const HotelItem: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photo, id} = props.hotel;

    return (
        <CustomLink to={`/hotel/${id}`} propStyle={styles.mainHotel}>
            <img src={photo} alt="hotel" className={styles.hotelPhoto}/>
            <div className={styles.description}>
                <div className={styles.hotelTitleContainer}>{title}</div>
                <p className={styles.hotelPrice}>${price} / night</p>
            </div>
        </CustomLink>
    )
}


export default HotelItem;