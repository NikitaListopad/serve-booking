import React, {FC} from "react";

type ButtonProps = {
    title: string,
    isDisabled: boolean,
    className?: string,
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

    const {title, isDisabled, className} = props;

    return (
           <button disabled={isDisabled} className={className}>
               {title}
           </button>
    )
}

export default Button;