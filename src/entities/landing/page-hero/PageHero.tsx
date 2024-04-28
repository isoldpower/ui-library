import {Children, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './PageHero.module.scss';

interface PageHeroProps {
    children: ReactNode;
}

export const PageHero: FC<PageHeroProps> = ({children}: PageHeroProps) => {
    return (
        <section className={`${classes.pageHero__wrapper} ul-mx-auto ul-flex ul-flex-col ul-gap-2`}>
            {Children.toArray(children).map((child, key) => (
                <div key={key}>{child}</div>
            ))}
        </section>
    );
};