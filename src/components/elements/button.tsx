import React, {FC} from "react";

type ButtonProps = {
    title: string,
    isDisabled: boolean,
    className?: string,
    onClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

    const {title, isDisabled, className, onClick} = props;

    return (
           <button disabled={isDisabled} className={className} onClick={onClick}>
               {title}
           </button>
    )
}

export default Button;