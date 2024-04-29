import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import '@/app/scss/main.scss';
import classes from './TabLink.module.scss';

interface TabLinkProps extends LinkProps {
}

export const TabLink: FC<TabLinkProps> = ({className, children, ...props}: TabLinkProps) => {
    return (
        <Link className={`${classes.tabLink__wrapper} ${className}`} {...props}>
            <div className={`${classes.tabLink__content}`} tabIndex={0}>
                {children}
            </div>
        </Link>
    );
};