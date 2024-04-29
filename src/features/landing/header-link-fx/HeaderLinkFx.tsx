import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './HeaderLinkFx.module.scss';
import {LinkProps} from "react-router-dom";
import {NavLink} from "@/shared/utilities";

interface HeaderNavLinkProps extends LinkProps {
    activeClassName?: string;
    pendingClassName?: string;
}

export const HeaderLinkFx: FC<HeaderNavLinkProps> = ({className, ...props}: HeaderNavLinkProps) => {
    return (
        <NavLink
            activeClassName={`${classes.headerNavLink__active}`}
            className={`${className}`}
            pendingClassName={classes.headerNavLink__pending} {...props} />
    );
};