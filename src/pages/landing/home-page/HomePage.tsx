import {FC} from "react";
import "@/app/scss/main.scss";
import classes from "./HomePage.module.scss";
import {Button} from "@/shared/ui-toolkit";
import {Github} from "@/shared/icon-library";
import {AnnounceHero} from "@/widgets/landing/announce-hero/AnnounceHero";

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => {
	return (
		<div className={`${classes.homePage__wrapper} ul-main-gutter`}>
			<div className={`${classes.homePage__content} ul-main-gutter-content`}>
				<AnnounceHero
					addon={<div className={`${classes.homePage__ctaPlaceholder}`} />}
					paragraphText={'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.'}
					headingText={'Learn Compound Components'}
					actions={<>
						<Button variant='accent'>Get Started</Button>
						<Button variant='secondary'>
							<Github width={16} height={16} className="absolute-center ul-mr-2"/>
							<span className={`${classes.announceHero__buttonIcon}`}>GitHub</span>
						</Button>
					</>}
				/>
				<div className={`${classes.homePage__showcase} ul-width-1of1`}>

				</div>
			</div>
		</div>
	);
};

export default HomePage;