import React, {FC} from "react";

interface InputProps {
    type: string;
    value?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    label?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {

    const {type, handleChange, value, placeholder, className, label} = props;

    return (
        <label>
            <input type={type || 'text'}
                   value={value || ''}
                   onChange={handleChange}
                   placeholder={placeholder || ''}
                   className={className}
            />
            {label}
        </label>
    )
}

export default Input