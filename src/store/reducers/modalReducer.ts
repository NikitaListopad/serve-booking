import {IModal} from "../../types/IModal";
import {ModalActions, ModalActionTypes} from "../../types/modalState";

const initialState: IModal = {
    isOpen: false,
    title: null,
    children: null
}

export const modalReducer = (state= initialState, action: ModalActions): IModal => {
    switch (action.type) {
        case ModalActionTypes.OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case ModalActionTypes.SET_MODAL_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case ModalActionTypes.SET_MODAL_CHILDREN:
            return {
                ...state,
                children: action.payload
            }
        case ModalActionTypes.CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                title: null
            }
        default:
            return state
    }
}