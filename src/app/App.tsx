import classes from '@/app/App.module.scss';
import {Outlet} from 'react-router-dom';

export const App = () => {

    return (
        <>
            <header className={`${classes.app__header}`}>
                <div className={`${classes.app__headerContent}`}></div>
                <div className={`${classes.app__headerModals}`}></div>
            </header>
            <main className={`${classes.app__main}`}>
                <div className={`${classes.app__mainContent}`}>
                    <Outlet />
                </div>
                <div className={`${classes.app__modals}`}></div>
                <div className={`${classes.app__notifications}`}></div>
            </main>
            <footer className={`${classes.app__footer}`}></footer>
        </>
    );
};