import {FC} from "react";
import "@/app/scss/main.scss";
import classes from "./HomePage.module.scss";
import {Button} from "@/shared/ui-toolkit";
import {Github} from "@/shared/icon-library";
import {PageHero} from "@/entities/landing/page-hero/PageHero";
import {AnnounceAddon, AnnounceHeading, AnnounceParagraph} from "@/widgets/landing";
import {Link} from "react-router-dom";

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => {
	return (
		<div className={`${classes.homePage__wrapper} ul-main-gutter`}>
			<PageHero>
				<AnnounceAddon>
					<div />
				</AnnounceAddon>
				<AnnounceHeading>
					Build your component library
				</AnnounceHeading>
				<AnnounceParagraph>
					Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
				</AnnounceParagraph>
				<div className='ul-flex ul-gap-4 ul-py-4 ul-tablet-pb-10'>
					<Button asChild variant='primary'>
						<Link to='/not-yet'>Get Started</Link>
					</Button>
					<Button asChild variant='secondary'>
						<Link to='/not-yet' target='_blank' className='ul-flex ul-align-items-center ul-justify-content-center'>
							<Github className="absolute-center ul-mr-2" height={16} width={16}/>
							<span className={`${classes.announceHero__buttonIcon}`}>GitHub</span>
						</Link>
					</Button>
				</div>
			</PageHero>
			<div className={`${classes.homePage__showcase}`} />
		</div>
	);
};

export default HomePage;