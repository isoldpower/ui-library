import {FC} from "react";
import '@/app/scss/main.scss';
import {LinkProps, NavLink} from "react-router-dom";

interface CustomNavLinkProps extends LinkProps {
    activeClassName?: string;
    pendingClassName?: string;
}

export const CustomNavLink: FC<CustomNavLinkProps> = ({className = '', activeClassName, pendingClassName, ...props}: CustomNavLinkProps) => {
    const getClass = ({ isActive, isPending }: {isActive: boolean, isPending: boolean}) => {
        const stateClass: string = isPending ? pendingClassName : isActive ? activeClassName : "";
        return className.concat(' ', stateClass);
    }

    return (
        <NavLink className={getClass} {...props} />
    );
};