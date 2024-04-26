import {FC} from "react";
import "@/app/scss/main.scss";
import classes from './CopyrightsFooter.module.scss';
import {Footer} from "@/entities/landing";
import {ErrorBoundary} from "@/shared/utils";

interface RightsFooterProps {
}

export const CopyrightsFooter: FC<RightsFooterProps> = () => {
	return (
		<div className={`${classes.copyrightsFooter__wrapper} ul-main-gutter`}>
			<ErrorBoundary fallback='Error loading credentials...'>
				<Footer className={`${classes.copyrightsFooter__content} ul-main-gutter-content ul-fs-100`}>
					<p className={`${classes.copyrightsFooter__paragraph}`}>
						Built by&nbsp;
						<a className={`${classes.copyrightsFooter__paragraphLink}`} href='https://github.com/isoldpower' target='_blank'>isoldpower</a>.
						The source code is available on&nbsp;
						<a className={`${classes.copyrightsFooter__paragraphLink}`} href='https://github.com/isoldpower/ui-library' target='_blank'>GitHub</a>.
					</p>
				</Footer>
			</ErrorBoundary>
		</div>
	);
};