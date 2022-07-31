import React, {FC} from "react";
import styles from './hotelPageStyles.module.scss'

interface HotelPageProps {
    title: string,
    price: string,
    photo: string,
}

const HotelPage: FC<HotelPageProps> = (props: HotelPageProps) => {

    const {title, price, photo} = props;

    return (
        <div className={styles.mainHotel}>
            <img src={photo} alt="hotel" className={styles.hotelPhoto}/>
            <div className={styles.description}>
                <div className={styles.hotelTitleContainer}>{title}</div>
                <p className={styles.hotelPrice}>${price} / night</p>
            </div>
        </div>
    )
}


export default HotelPage;