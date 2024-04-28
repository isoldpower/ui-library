import {Children, FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import classes from './PageHero.module.scss';
import {ErrorBoundary} from "@/shared/utils";

interface PageHeroProps {
    upperAddon?: ReactNode;
    heading?: ReactNode;
    paragraph?: ReactNode;
    actions?: ReactNode;
}

export const PageHero: FC<PageHeroProps> = ({upperAddon, heading, actions, paragraph}: PageHeroProps) => {
    return (
        <section className={`${classes.pageHero__wrapper} ul-mx-auto ul-flex ul-flex-col ul-gap-2`}>
            {upperAddon &&
                <div className={`${classes.pageHero__upperAddon}`}>
                    {upperAddon}
                </div>
            }
            {heading &&
                <div className={`${classes.pageHero__headingWrapper}`}>
                    {heading}
                </div>
            }
            {paragraph &&
                <div className={`${classes.pageHero__paragraphWrapper}`}>
                    {paragraph}
                </div>
            }
            <div className={`${classes.pageHero__buttonsGap} ul-py-4 ul-tablet-pb-10 ul-flex ul-gap-4`}>
                {
                    Children
                        .toArray(actions)
                        .map((action, key) => (
                            <div className={`${classes.pageHero__action}`} key={key}>{action}</div>
                        ))
                }
            </div>
        </section>
    );
};