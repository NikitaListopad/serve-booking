import React, {FC} from 'react';
import DatePickerFilter from "./DatePickerFilter";
import SelectPriceFilter from "./SelectPriceFilter";



const Filters: FC = () => {

    return (
        <div>
            <DatePickerFilter />
            <SelectPriceFilter />
        </div>
    )
}

export default Filters