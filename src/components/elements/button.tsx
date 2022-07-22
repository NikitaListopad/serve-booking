import React, {FC} from "react";

type ButtonProps = {
    title: string,
    isDisabled: boolean,

}

const Button: FC<ButtonProps> = (props: ButtonProps) => {

    const {title, isDisabled} = props;

    return (
           <button disabled={isDisabled}>
               {title}
           </button>
    )
}

export default Button;