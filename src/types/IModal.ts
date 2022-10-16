import {ReactNode} from "react";

export interface IModal {
    title: string|null,
    isOpen: boolean,
    children: ReactNode
}