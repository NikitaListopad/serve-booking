import React, {FC, ReactNode} from "react";
import styles from "./ModalContainer.module.scss";
import ModalHeader from "./ModalHeader";

interface ModalContainerProps {
    isHidden: boolean,
    children?: ReactNode,
    onCloseClick: () => void,
}

const ModalContainer: FC<ModalContainerProps> = (props: ModalContainerProps) => {

    const {isHidden, onCloseClick, children} = props;

    const display = isHidden ? 'block' : 'none';

    return (
        <div className={styles.modalContainer} style={{display}}>
            <div className={styles.modalWindow}>
                <ModalHeader onCloseClick={onCloseClick} />
                {children}
            </div>
        </div>
    )
}

export default ModalContainer;