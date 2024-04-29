import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './Button.module.scss';
import {ButtonProps} from "./types";
import {TabLink} from "@/shared/utilities";

export const Button: FC<ButtonProps> = ({className, variant = 'primary', ...props}: ButtonProps) => {
    if(props.semantic === 'button')
        return <button className={`${classes.button} ${classes.button__font} ul-px-4 ul-py-2`} itemType={variant} {...props} type={props.type ?? 'button'} />
    else if(props.semantic === 'link')
        return <TabLink className={`${classes.button} ${classes.button__font} ul-px-4 ul-py-2`} itemType={variant} {...props} />
};