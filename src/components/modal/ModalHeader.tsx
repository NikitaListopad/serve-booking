import React, {FC} from "react";
import styles from "./ModalContainer.module.scss";
import Button from "../elements/Button";

interface ModalHeaderProps {
    onClose: () => void,
    title: string,
}

const ModalHeader: FC<ModalHeaderProps> = (props) => {

    const {onClose, title} = props;

    return (
        <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{title}</h3>
            <Button isDisabled={false} onClick={onClose} className={styles.modalCloseButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.67762 7.97496L14.8357 2.86698L15.8873 1.81534C16.0376 1.6651 16.0376 1.41471 15.8873 1.2144L14.7856 0.112676C14.5853 -0.0375587 14.3349 -0.0375587 14.1847 0.112676L8.02504 6.32238L1.81534 0.112676C1.6651 -0.0375587 1.41471 -0.0375587 1.2144 0.112676L0.112676 1.2144C-0.0375587 1.41471 -0.0375587 1.6651 0.112676 1.81534L6.32238 7.97496L0.112676 14.1847C-0.0375587 14.3349 -0.0375587 14.5853 0.112676 14.7856L1.2144 15.8873C1.41471 16.0376 1.6651 16.0376 1.81534 15.8873L8.02504 9.67762L13.133 14.8357L14.1847 15.8873C14.3349 16.0376 14.5853 16.0376 14.7856 15.8873L15.8873 14.7856C16.0376 14.5853 16.0376 14.3349 15.8873 14.1847L9.67762 7.97496Z"
                        fill="#696B6B"/>
                </svg>
            </Button>
        </div>
    )
}

export default ModalHeader