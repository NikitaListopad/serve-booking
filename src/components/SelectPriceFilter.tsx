import {ChangeEvent, FC, useRef, useState} from "react";
import {Slider} from "@mui/material";
import TextField from '@mui/material/TextField';

const minDistance = 1;

function valuetext(value: number) {
    return `${value}$`;
}

const SelectPriceFilter: FC = () => {

    const [value, setValue] = useState([0, 100]);

    const inputMinPriceRef = useRef<HTMLInputElement>(null);
    const inputMaxPriceRef = useRef<HTMLInputElement>(null);

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
        <div>
            <span>Price Range</span>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <TextField inputRef={inputMinPriceRef} inputProps={{value: value[0], onChange: onMinInputPriceChange}}/>
                <TextField inputRef={inputMaxPriceRef} inputProps={{value: value[1], onChange: onMaxInputPriceChange}}/>
            </div>
            <Slider
                getAriaLabel={() => 'Select price'}
                value={!value[0] ? [0, value[1]] : value}
                onChange={onPriceChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </div>
    )
}

export default SelectPriceFilter