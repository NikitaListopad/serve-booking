import React, {FC} from "react";
import styles from './hotelPageStyles.module.scss'

interface HotelPageProps {
    title: string,
    price: string,
    photos: any[],

}

const HotelPage: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photos} = props;

    return (
        <div className={styles.mainHotel}>
            <h2>{title}</h2>
            <p>{price}</p>
            <img src={photos[0]} alt="hotel"/>
        </div>
    )
}

export default HotelPage;