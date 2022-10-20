import {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import defaultStyles from './CustomLink.module.scss';

interface CustomLinkProps {
    to: string,
    children: ReactNode,
    propStyle?: string
}

const CustomLink: FC<CustomLinkProps> = (
    {
        to,
        children,
        propStyle,
        ...props
    }) => {

    return (
        <Link to={to} className={`${defaultStyles.link} ${propStyle}`} {...props} >
            {children}
        </Link>
    )
}

export default CustomLink