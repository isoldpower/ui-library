import classes from "@/app/App.module.scss";
import {Outlet} from "react-router-dom";
import {NavigationHeader} from "@/widgets/landing/navigation-header/NavigationHeader";
import {CopyrightsFooter} from "@/widgets/landing/copyrights-footer/CopyrightsFooter";

export const App = () => {

	return (
		<>
			<header className={`${classes.app__header}`} style={{zIndex: 99, position: 'sticky', top: 0}}>
				<NavigationHeader />
				<div className={`${classes.app__headerModals}`} />
			</header>
			<main className={`${classes.app__main}`} style={{minHeight: "90dvh"}}>
				<div className={`${classes.app__mainContent}`}>
					<Outlet />
				</div>
				<div className={`${classes.app__modals}`} />
				<div className={`${classes.app__notifications}`} />
			</main>
			<footer className={`${classes.app__footer}`}>
				<CopyrightsFooter />
			</footer>
		</>
	);
};