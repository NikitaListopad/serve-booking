import {Dispatch} from "redux";
import {ModalActionTypes} from "../../types/modalState";
import {ReactNode} from "react";

export const setIsModalOpen = (title: string, children: ReactNode) => (dispatch: Dispatch) => {
    dispatch({type: ModalActionTypes.OPEN_MODAL});
    dispatch({type: ModalActionTypes.SET_MODAL_TITLE, payload: title})
    dispatch({type: ModalActionTypes.SET_MODAL_CHILDREN, payload: children})
};

export const closeModal = () => (dispatch: Dispatch) => {
    dispatch({type: ModalActionTypes.CLOSE_MODAL});
};