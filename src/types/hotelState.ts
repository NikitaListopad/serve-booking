import {IHotel} from "./IHotel";

export interface HotelsState {
    hotels: IHotel[];
    currentHotel: IHotel | null;
    loading: boolean;
    error: null | string;
}

export enum HotelActionTypes {
    FETCH_HOTELS = 'FETCH_HOTELS',
    FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
    FETCH_HOTELS_ERROR = 'FETCH_HOTELS_ERROR',

    FETCH_CURRENT_HOTEL = 'FETCH_CURRENT_HOTEL',
    FETCH_CURRENT_HOTEL_SUCCESS = 'FETCH_CURRENT_HOTEL_SUCCESS',
    FETCH_CURRENT_HOTEL_ERROR = 'FETCH_CURRENT_HOTEL_ERROR',
}

interface FetchHotelsAction {
    type: HotelActionTypes.FETCH_HOTELS
}

interface FetchHotelsSuccessAction {
    type: HotelActionTypes.FETCH_HOTELS_SUCCESS,
    payload: IHotel[];
}

interface FetchHotelsErrorAction {
    type: HotelActionTypes.FETCH_HOTELS_ERROR,
    payload: string
}

interface FetchHotelAction {
    type: HotelActionTypes.FETCH_CURRENT_HOTEL
}

interface FetchHotelSuccessAction {
    type: HotelActionTypes.FETCH_CURRENT_HOTEL_SUCCESS,
    payload: IHotel;
}

interface FetchHotelErrorAction {
    type: HotelActionTypes.FETCH_CURRENT_HOTEL_ERROR,
    payload: string
}

export type HotelsAction =
    FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsErrorAction |
    FetchHotelAction | FetchHotelSuccessAction | FetchHotelErrorAction ;