import React, {FC} from 'react';
import styles from './Main.module.scss'

interface MainProps {
    children?: React.ReactNode
}

const Main: FC<MainProps> = (props: MainProps) => {

    const {children} = props;

    return (
        <main className={styles.mainBlock}>
            <div className={styles.mainLayout}>
                {children}
            </div>
        </main>
    )
}

export default Main;