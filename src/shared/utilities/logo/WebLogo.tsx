import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './WebLogo.module.scss';
import {Logo} from "@/shared/icon-library";

interface LogoProps {
    children: ReactNode;
}

export const WebLogo: FC<LogoProps> = ({children}: LogoProps) => {
    return (
        <div className={`${classes.webLogo__wrapper} ul-flex ul-gap-2 ul-align-items-center`}>
            <Logo height={24} width={24} />
            <span>{children}</span>
        </div>
    );
};