import {BaseHTMLAttributes, Children, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './Footer.module.scss';

interface FooterProps extends BaseHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const Footer: FC<FooterProps> = ({className, children, ...props}: FooterProps) => {
    return (
        <div className={`${classes.footer__wrapper} ${className} ul-px-9 ul-py-6`} {...props}>
            <div className={`${classes.footer__content}`}>
                {Children.toArray(children).map((child, key) => (
                    <div>{child}</div>
                ))}
            </div>
        </div>
    );
};