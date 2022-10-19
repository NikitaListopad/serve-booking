import {HotelActionTypes} from "../../types/hotelState";
import {Dispatch} from "redux";
import HotelsHttp from "../../http/HotelsHttp";
import {IHotel} from "../../types/IHotel";

export const fetchHotels = () => async (dispatch: Dispatch) => {
    dispatch({type: HotelActionTypes.FETCH_HOTELS})
    try {
        const response = await HotelsHttp.fetchHotels();

        dispatch({type: HotelActionTypes.FETCH_HOTELS_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: HotelActionTypes.FETCH_HOTELS_ERROR, payload: 'Temporary error'})
    }
};

export const fetchCurrentHotel = (id: string) => async (dispatch: Dispatch) => {
  dispatch({type: HotelActionTypes.FETCH_CURRENT_HOTEL})
  try {
      const response = await HotelsHttp.fetchTargetHotel(id);

      dispatch({type: HotelActionTypes.FETCH_CURRENT_HOTEL_SUCCESS, payload: response.data})
  } catch (e) {
      dispatch({type: HotelActionTypes.FETCH_CURRENT_HOTEL_ERROR, payload: 'Temporary error'})
  }
}
