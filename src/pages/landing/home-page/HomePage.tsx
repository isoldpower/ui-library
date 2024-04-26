import {FC} from "react";
import '@/app/scss/main.scss';
import classes from './HomePage.module.scss';

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = ({}: HomePageProps) => {
    return (
        <div className={`${classes.homePage__wrapper}`}>
            <div className={`${classes.homePage__content}`}>
                Hello world!
            </div>
        </div>
    );
};

export default HomePage;