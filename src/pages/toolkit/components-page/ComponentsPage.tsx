import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './ComponentsPage.module.scss';

interface ComponentsProps {
}

const ComponentsPage: FC<ComponentsProps> = () => {
    return (
        <div className={`${classes.components__wrapper}`}>
            <div className={`${classes.components__content}`} />
        </div>
    );
};

export default ComponentsPage;