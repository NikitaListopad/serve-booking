import React, {FC, ReactNode} from "react";

type ButtonProps = {
    title?: string,
    isDisabled: boolean,
    className?: string,
    onClick: () => void,
    children?: ReactNode
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

    const {title, isDisabled, className, onClick, children} = props;

    return (
           <button disabled={isDisabled} className={className} onClick={onClick}>
               {title? title : children}
           </button>
    )
}

export default Button;