import {HotelActionTypes} from "../../types/hotelState";
import {Dispatch} from "redux";
import HotelsHttp from "../../http/HotelsHttp";

export const fetchHotels = () => async (dispatch: Dispatch) => {
    dispatch({type: HotelActionTypes.FETCH_HOTELS})
    try {
        const response = await HotelsHttp.fetchHotels();

        dispatch({type: HotelActionTypes.FETCH_HOTELS_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: HotelActionTypes.FETCH_HOTELS_ERROR, payload: 'Temporary error'})
    }
}