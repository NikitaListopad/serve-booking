import React, {FC} from "react";
import styles from "./ModalContainer.module.scss";
import ModalHeader from "./ModalHeader";
import {useActions, useTypedSelector} from "../../hooks/reduxHooks";
import {closeModal} from "../../store/actions/modalActions";

const ModalContainer: FC = () => {

    const {isOpen, children, title} = useTypedSelector(state => state.modal);
    const {closeModal} = useActions();

    const display = isOpen ? 'block' : 'none';

    return (
        <div className={styles.modalContainer} style={{display}}>
            <div className={styles.modalWindow}>
                <ModalHeader onCloseClick={closeModal} title={title}/>
                {children}
            </div>
        </div>
    )
}

export default ModalContainer;