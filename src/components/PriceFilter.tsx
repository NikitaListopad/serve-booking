import {FC, useEffect, useRef, useState} from "react";
import {Slider} from "@mui/material";
import TextField from '@mui/material/TextField';
import styles from './PriceFilter.module.scss';
import {useTypedSelector} from "../hooks/reduxHooks";

const minDistance = 1;

function valuetext(value: number) {
    return `${value}$`;
}

const PriceFilter: FC = () => {

    const [value, setValue] = useState<number[]>([0, 0]);

    const inputMinPriceRef = useRef<HTMLInputElement>(null);
    const inputMaxPriceRef = useRef<HTMLInputElement>(null);

    const {hotels} = useTypedSelector(state => state.hotels);

    useEffect(() => {
        setValue([value[0], findHighest()])
    },[hotels])

    const findHighest = (): number =>
        hotels.reduce((price, hotel) =>
        Number(price) < Number(hotel.price) ? Number(hotel.price) : price, 0);

    const onPriceChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    const onMinInputPriceChange = () => {
            setValue([Number(inputMinPriceRef?.current?.value), value[1]])
    }

    const onMaxInputPriceChange = () => {
            setValue([value[0], Number(inputMaxPriceRef?.current?.value)])
    }

    return (
        <div className={styles.priceContainer}>
            <span className={styles.priceTitle}>Price Range</span>
            <div className={styles.inputContainer}>
                <TextField
                    inputRef={inputMinPriceRef}
                    inputProps={{value: value[0], onChange: onMinInputPriceChange}}
                    className={styles.inputField}
                />
                <TextField
                    inputRef={inputMaxPriceRef}
                    inputProps={{value: value[1], onChange: onMaxInputPriceChange}}
                    className={styles.inputField}
                />
            </div>
            <Slider
                getAriaLabel={() => 'Select price'}
                value={!value[0] ? [0, value[1]] : value}
                onChange={onPriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className={styles.priceSlider}
                max={findHighest()}
                disableSwap
            />
        </div>
    )
}

export default PriceFilter