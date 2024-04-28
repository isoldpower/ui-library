import {FC, ReactNode} from "react";
import classes from '../AnnounceHero.module.scss';
import '@/app/scss/main.scss';
import {ElementFx} from "@/features/landing/element-fx/ElementFx";

interface AnnounceParagraphProps {
    children: ReactNode;
}

export const AnnounceParagraph: FC<AnnounceParagraphProps> = (props: AnnounceParagraphProps) => {
    const fetchingElement = <h1 className={`${classes.announceHero__paragraphLoading} ul-fs-300`}>Loading, loading, loading, Loading, loading, loading, Loading, loading, loading, Loading, loading, loading</h1>
    const errorElement = <h1 className={`${classes.announceHero__paragraphError} ul-fs-300`}>Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error, Error, error, error, error</h1>

    return (
        <ElementFx errorFallback={errorElement} fetchFallback={fetchingElement}>
            <span className={`${classes.announceHero__paragraph} ul-fs-300`}>{props.children}</span>
        </ElementFx>
    );
};