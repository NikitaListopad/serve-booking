import React, {FC} from 'react';
import DatePickerFilter from "./DatePickerFilter";
import PriceFilter from "./PriceFilter";
import styles from './Filters.module.scss';
import Button from "./elements/Button";

const Filters: FC = () => {

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.rowFilters}>
                <DatePickerFilter />
                <PriceFilter />
            </div>

            <Button isDisabled={false} onClick={() => console.log('accept')} title='Accept' className={styles.successButton}/>
        </div>
    )
}

export default Filters