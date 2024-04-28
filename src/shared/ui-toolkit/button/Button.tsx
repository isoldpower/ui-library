import {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({className, variant = 'primary', ...props}: ButtonProps) => {
    return (
        <a className={`${classes.button} ul-py-2 ul-px-4`} {...props} itemType={variant} />
    );
};