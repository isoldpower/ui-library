import {FC, ReactNode} from "react";
import classes from "@/widgets/landing/announce-hero/Announce.module.scss";
import {ElementFx} from "@/features/landing/element-fx/ElementFx";

interface AnnounceAddonProps {
    children: ReactNode;
}

export const AnnounceAddon: FC<AnnounceAddonProps> = ({children}: AnnounceAddonProps) => {
    const fetchingElement = <div className={`${classes.announceHero__ctaLoading}`}/>
    const errorElement = <div className={`${classes.announceHero__ctaError}`}/>

    return (
        <ElementFx errorFallback={errorElement} fetchFallback={fetchingElement}>
            <div className={`${classes.announceHero__cta}`}>
                {children}
            </div>
        </ElementFx>
    )
};