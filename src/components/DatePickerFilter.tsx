import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, {FC} from "react";
import {DatePicker} from "@mui/x-date-pickers";
import styles from './DatePickerFilter.module.scss'
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

const DatePickerFilter: FC = () => {

    const [startDate, setStartDay] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    return (
        <div className={styles.datesContainer}>
            <span className={styles.datesTitle}>Select travel dates</span>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    disablePast
                    className={styles.dateBlock}
                    label="Start date"
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDay(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    className={styles.dateBlock}
                    disablePast
                    label="End date"
                    value={endDate}
                    onChange={(newValue) => {
                        setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default DatePickerFilter