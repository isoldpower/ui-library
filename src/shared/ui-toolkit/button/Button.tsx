import {cloneElement, FC, isValidElement, ReactElement} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonProps} from "./types";

export const Button: FC<ButtonProps> = ({asChild, variant = 'primary', ...props}: ButtonProps) => {
    const adjustElement = (element: ReactElement) => {
        if (!element) return;

        const actualClass = element.props.className + classes.button + ' ' + classes.button__font;
        const newProps = {...element.props, itemType: variant, className: actualClass};
        return cloneElement(element, newProps);
    };

    if (asChild && isValidElement(props.children)) {
        return adjustElement(props.children);
    } else {
        return <button className={`${classes.button} ${classes.button__font}`} itemType={variant} {...props}/>
    }
};