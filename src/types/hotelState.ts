export interface HotelsState {
    hotels: any[];
    loading: boolean;
    error: null | string;
}

export enum HotelActionTypes {
    FETCH_HOTELS = 'FETCH_HOTELS',
    FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
    FETCH_HOTELS_ERROR = 'FETCH_HOTELS_ERROR',
}

interface FetchHotelsAction {
    type: HotelActionTypes.FETCH_HOTELS
}

interface FetchHotelsSuccessAction {
    type: HotelActionTypes.FETCH_HOTELS_SUCCESS,
    payload: any[];
}

interface FetchHotelsErrorAction {
    type: HotelActionTypes.FETCH_HOTELS_ERROR,
    payload: string
}

export type HotelsAction = FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsErrorAction;