import React, {FC} from "react";
import {useTypedSelector} from "../hooks/reduxHooks";

const HotelPage: FC = () => {

    const {currentHotel} = useTypedSelector(state => state.hotels);

    return (
        <div>
            <img src={currentHotel?.photo} alt=""/>
            <div>
                <span>{currentHotel?.title}</span>
                <span>{currentHotel?.price}</span>
                <button>Book me</button>
            </div>
        </div>
    )
}

export default HotelPage;