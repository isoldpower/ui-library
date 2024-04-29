import {BaseHTMLAttributes, ButtonHTMLAttributes} from "react";

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

type ButtonData = {
    variant?: ButtonVariant;
}

type DefaultButton = {
    asChild?: false;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ExplicitButton = {
    asChild: true;
} & BaseHTMLAttributes<HTMLElement>;

export type ButtonProps = ButtonData & (DefaultButton | ExplicitButton);
