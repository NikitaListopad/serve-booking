import React, {FC} from "react";
import Input from "./elements/input";

interface HotelsFilterProps {
    onPriceSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTitleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HotelFilter: FC<HotelsFilterProps> = (props: HotelsFilterProps) => {

    const {onPriceSelect, onTitleSelect} = props;

    return (
        <div style={{margin: '20px auto'}}>
                <Input type='checkbox' onChange={onPriceSelect} label='Price > 500' />
                <Input type='checkbox' onChange={onTitleSelect} label='Title longer than 5'/>
        </div>
    )
}

export default HotelFilter;

