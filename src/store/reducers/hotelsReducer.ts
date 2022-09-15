import {HotelActionTypes, HotelsAction, HotelsState} from "../../types/hotelState";

const initialState: HotelsState = {
    hotels: [],
    currentHotel: null,
    error: null,
    loading: false
}

export const hotelsReducer = (state= initialState, action: HotelsAction): HotelsState => {
    switch (action.type) {

        case HotelActionTypes.FETCH_HOTELS:
        case HotelActionTypes.FETCH_CURRENT_HOTEL:
            return {
                ...state,
                loading: true
            }

        case HotelActionTypes.FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                loading: false,
                hotels: action.payload
            }
        case HotelActionTypes.FETCH_CURRENT_HOTEL_SUCCESS:
            return {
                ...state,
                currentHotel: action.payload,
                loading: false
            }

        case HotelActionTypes.FETCH_HOTELS_ERROR:
        case HotelActionTypes.FETCH_CURRENT_HOTEL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}