import {ReactNode} from "react";

export enum ModalActionTypes {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',

    SET_MODAL_TITLE = 'SET_MODAL_TITLE',
    SET_MODAL_CHILDREN = 'SET_MODAL_CHILDREN',
}

interface OpenModalAction {
    type: ModalActionTypes.OPEN_MODAL,
}

interface CloseModalAction {
    type: ModalActionTypes.CLOSE_MODAL
}

interface SetModalTitle {
    type: ModalActionTypes.SET_MODAL_TITLE,
    payload: string
}

interface SetModalChildren {
    type: ModalActionTypes.SET_MODAL_CHILDREN,
    payload: ReactNode
}

export type ModalActions =
    OpenModalAction | CloseModalAction |
    SetModalTitle | SetModalChildren;