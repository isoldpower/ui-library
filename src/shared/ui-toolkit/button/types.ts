import {LinkProps} from "react-router-dom";
import {ButtonHTMLAttributes} from "react";

type ButtonVariant = 'primary' | 'secondary';

type ButtonData = {
    variant?: ButtonVariant;
}

export type ButtonProps = {
} & ButtonData & (AnchorButton | FunctionButton)

type AnchorButton = {semantic: 'link', to: string} & LinkProps;
type FunctionButton = {semantic: 'button'} & ButtonHTMLAttributes<HTMLButtonElement>;