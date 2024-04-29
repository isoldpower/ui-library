import {FC, ReactNode} from "react";
import classes from './Announce.module.scss';
import '@/app/scss/main.scss';
import {ElementFx} from "@/features/landing/element-fx/ElementFx";

interface AnnounceParagraphProps {
    children: ReactNode;
}

export const AnnounceParagraph: FC<AnnounceParagraphProps> = ({children}: AnnounceParagraphProps) => {
    const fetchingElement = <span className={`${classes.announceHero__paragraphLoading} ul-fs-300`}>Loading, loading, loading, Loading, loading, loading, Loading, loading, loading, Loading, loading, loading</span>
    const errorElement = <span className={`${classes.announceHero__paragraphError} ul-fs-300`}>Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error</span>

    return (
        <ElementFx errorFallback={errorElement} fetchFallback={fetchingElement}>
            <span className={`${classes.announceHero__paragraph} ul-fs-300`}>{children}</span>
        </ElementFx>
    );
};