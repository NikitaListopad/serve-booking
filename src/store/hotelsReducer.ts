import {createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IHotel} from "../types/IHotel";

interface HotelsState {
    hotels: IHotel[];
    loading: boolean;
    error: string;
}

const initialState = {
    loading: false,
    error: '',
    hotels: [],
}

// const initialAction = createAction<[], 'INITIAL'>('INITIAL')

// export default createReducer(initialState, {
//     [initialAction.type]: (state: any, action: PayloadAction<[]>) => {
//         state.hotels = state.hotels.push('123');
//     }
// })

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {

    }
})

export default hotelsSlice.reducer;