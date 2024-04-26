import {FC} from "react";
import "@/app/scss/main.scss";
import classes from "./NavigationHeader.module.scss";
import {Header} from "@/entities/landing/header/Header";
import {Link} from "react-router-dom";


interface NavigationHeaderProps {
}

export const NavigationHeader: FC<NavigationHeaderProps> = () => {
	return (
		<Header>
			<nav className={`${classes.navigationHeader__navigation}`}>
				<ul className={`${classes.navigationHeader__routesList} ul-flex ul-gap-4`}>
					<li className={`${classes.navigationHeader__route}`}>
						<Link to='/one'>One</Link>
					</li>
					<li className={`${classes.navigationHeader__route}`}>
						<Link to='/two'>Two</Link>
					</li>
					<li className={`${classes.navigationHeader__route}`}>
						<Link to='/three'>Three</Link>
					</li>
				</ul>
			</nav>
		</Header>
	);
};