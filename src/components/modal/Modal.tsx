import React, {FC, ReactNode} from "react";
import styles from "./ModalContainer.module.scss";
import ModalHeader from "./ModalHeader";

interface ModalProps {
    isOpen: boolean,
    children: ReactNode,
    title: string,
    onClose: () => void
}

const Modal: FC<ModalProps> = (props) => {

    const {isOpen, children, title, onClose} = props;

    return (
        <div className={styles.modalContainer} style={!isOpen ? {display: 'none'} : {display: 'block'}}>
            <div className={styles.modalWindow}>
                <ModalHeader onClose={onClose} title={title}/>
                {children}
            </div>
        </div>
    )
}

export default Modal;