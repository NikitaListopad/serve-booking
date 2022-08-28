import React, {FC, HTMLAttributes} from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    label?: string;
    type: string;
    value?: string;
}

const Input: FC<InputProps> = (props) => {

    const {label} = props;

    return (
        <label>
            <input
                {...props}
            />
            {label}
        </label>
    )
}

export default Input