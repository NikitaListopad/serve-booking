import {HotelActionTypes, HotelsAction, HotelsState} from "../../types/hotelState";

const initialState: HotelsState = {
    hotels: [],
    error: null,
    loading: false
}

export const hotelsReducer = (state= initialState, action: HotelsAction): HotelsState => {
    switch (action.type) {

        case HotelActionTypes.FETCH_HOTELS:
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

        case HotelActionTypes.FETCH_HOTELS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}