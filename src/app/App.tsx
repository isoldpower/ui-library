import classes from "@/app/App.module.scss";
import {Outlet} from "react-router-dom";
import {NavigationHeader} from "@/widgets/landing/navigation-header/NavigationHeader";
import {RightsFooter} from "@/widgets/landing/RightsFooter/RightsFooter";

export const App = () => {

	return (
		<>
			<header className={`${classes.app__header}`}>
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
				<RightsFooter />
			</footer>
		</>
	);
};