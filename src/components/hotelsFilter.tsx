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
            <form style={{display: 'flex', justifyContent: 'space-around', width: '400px', margin: '0 auto'}}>
                <Input type='checkbox' handleChange={onPriceSelect} label='Price > 500' />
                <Input type='checkbox' handleChange={onTitleSelect} label='Title longer than 5'/>
            </form>
        </div>
    )
}

export default HotelFilter;

