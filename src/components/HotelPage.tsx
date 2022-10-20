import React, {FC, useEffect} from "react";
import {useActions, useTypedSelector} from "../hooks/reduxHooks";
import {fetchCurrentHotel} from "../store/actions/hotelsAction";
import {useParams} from "react-router-dom";
import styles from "./HotelPage.module.scss";

const HotelPage: FC = () => {

    const {currentHotel, loading} = useTypedSelector(state => state.hotels);

    const {fetchCurrentHotel} = useActions();

    const {id} = useParams();

    useEffect(() => {
        if (id) fetchCurrentHotel(id);
    }, [])

    if (loading) return <div>Please wait</div>

    return (
        <div className={styles.hotelPageContainer}>
            <img src={currentHotel?.photo} alt="" className={styles.hotelImage}/>
            <div>
                <span>{currentHotel?.title}</span>
                <span>{currentHotel?.price}</span>
                <button>Book me</button>
            </div>
        </div>
    )
}

export default HotelPage;