import {FC} from "react";
import "@/app/scss/main.scss";
import classes from "./HomePage.module.scss";
import {Button} from "@/shared/ui-toolkit";
import {Github} from "@/shared/icon-library";
import {AnnounceAddon} from "@/widgets/landing/announce-hero/AnnounceAddon";
import {AnnounceHeading} from "@/widgets/landing/announce-hero/AnnounceHeading";
import {PageHero} from "@/entities/landing/page-hero/PageHero";
import {AnnounceParagraph} from "@/widgets/landing/announce-hero/AnnounceParagraph";

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => {
	return (
		<div className={`${classes.homePage__wrapper} ul-main-gutter`}>
			<div className={`${classes.homePage__content} ul-main-gutter-content`}>
				<PageHero>
					<AnnounceAddon>
						<div></div>
					</AnnounceAddon>
					<AnnounceHeading>
						Build your component library
					</AnnounceHeading>
					<AnnounceParagraph>
						Beautifully designed components that you can copy and paste into your apps. Accessible.Customizable. Open Source.
					</AnnounceParagraph>
					<div className='ul-flex ul-gap-4 ul-py-4 ul-tablet-pb-10'>
						<Button semantic='link' variant='primary' to='/not-yet'>Get Started</Button>
						<Button semantic='link' variant='primary' to='/not-yet' target='_blank'>
							<div className='ul-flex ul-align-items-center ul-justify-content-center'>
								<Github width={16} height={16} className="absolute-center ul-mr-2"/>
								<span className={`${classes.announceHero__buttonIcon}`}>GitHub</span>
							</div>
						</Button>
					</div>
				</PageHero>
				<div className={`${classes.homePage__showcase} ul-width-1of1`}>
				</div>
			</div>
		</div>
	);
};

export default HomePage;