import {FC, ReactNode} from "react";
import classes from "./Announce.module.scss";
import '@/app/scss/main.scss';
import {ElementFx} from "@/features/landing/element-fx/ElementFx";

interface AnnounceHeadingProps {
    children: ReactNode;
}

export const AnnounceHeading: FC<AnnounceHeadingProps> = (props: AnnounceHeadingProps) => {
    const fetchingElement = <h1 className={`${classes.announceHero__headingLoading} ul-heading-1`}>Loading, loading, loading</h1>
    const errorElement = <h1 className={`${classes.announceHero__headingError} ul-heading-1`}>Error, error, error, error</h1>

    return (
        <ElementFx errorFallback={errorElement} fetchFallback={fetchingElement}>
            <h1 className={`${classes.announceHero__heading} ul-heading-1`}>{props.children}</h1>
        </ElementFx>
    )
};