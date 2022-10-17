import React, {FC} from "react";
import styles from './hotelPageStyles.module.scss'
import {IHotel} from "../types/IHotel";
import {setCurrentHotel} from "../store/actions/hotelsAction";
import {useActions} from "../hooks/reduxHooks";
import {Link} from "react-router-dom";


interface HotelPageProps {
    hotel: IHotel
}

const HotelItem: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photo, id} = props.hotel;

    const {setCurrentHotel} = useActions();

    return (
        <Link to={`/hotel/${id}`} className={styles.mainHotel} onClick={() => setCurrentHotel(props.hotel)}>
            <img src={photo} alt="hotel" className={styles.hotelPhoto}/>
            <div className={styles.description}>
                <div className={styles.hotelTitleContainer}>{title}</div>
                <p className={styles.hotelPrice}>${price} / night</p>
            </div>
        </Link>
    )
}


export default HotelItem;