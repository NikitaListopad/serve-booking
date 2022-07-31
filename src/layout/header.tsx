import React, {FC} from "react";
import styles from './header.module.scss';


const Header: FC = () => {

    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerLayout}>
                <div>Logo-Image</div>
                <div>Navigation</div>
                <div>Auth block</div>
            </div>
        </header>
    )
};

export default Header;