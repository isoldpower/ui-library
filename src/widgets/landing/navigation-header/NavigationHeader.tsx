import {FC} from "react";
import "@/app/scss/main.scss";
import classes from "./NavigationHeader.module.scss";
import {Header} from "@/entities/landing";
import {routePaths} from "@/shared/constants";
import {HeaderLinkFx} from "@/features/landing";
import {ErrorBoundary, List} from "@/shared/utils";


interface NavigationHeaderProps {
}

export const NavigationHeader: FC<NavigationHeaderProps> = () => {
	return (
		<Header>
			<ErrorBoundary fallback='Error loading navigation...'>
				<nav className={`${classes.navigationHeader__navigation}`}>
					<List className={`${classes.navigationHeader__routesList} ul-flex ul-align-items-center ul-gap-4 ul-desktop-gap-7`}>
						<HeaderLinkFx className={`${classes.navigationHeader__route}`} to={routePaths.components}>Components</HeaderLinkFx>
					</List>
				</nav>
			</ErrorBoundary>
		</Header>
	);
};