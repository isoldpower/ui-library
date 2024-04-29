import {cloneElement, FC, isValidElement, ReactElement} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonProps} from "./types";

export const Button: FC<ButtonProps> = ({variant = 'primary', ...props}: ButtonProps) => {
    const adjustElement = (element: ReactElement) => {
        if (!element) return;

        const actualClass = classes.button.concat(' ', classes.button__font);
        if (element.props.className) actualClass.concat(' ', element.props.className);
        const newProps = {...element.props, itemType: variant, className: actualClass};
        return cloneElement(element, newProps);
    };

    if (props.asChild === true)
        return isValidElement(props.children) ? adjustElement(props.children) : undefined;
    else if (!props.asChild) {
        return <button className={`${classes.button} ${classes.button__font}`} itemType={variant} type='button' {...props} />
    }
};