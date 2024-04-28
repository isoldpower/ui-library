import {FC, ReactNode} from "react";
import '@/app/scss/main.scss';
import {PageHero} from "@/entities/landing/page-hero/PageHero";
import {AnnounceAddon} from "./parts/AnnounceAddon";
import {AnnounceParagraph} from "@/widgets/landing/announce-hero/parts/AnnounceParagraph";
import {AnnounceHeading} from "@/widgets/landing/announce-hero/parts/AnnounceHeading";

interface AnnounceHeroProps {
    addon: ReactNode;
    headingText: ReactNode;
    paragraphText: ReactNode;
    actions: ReactNode;
}

export const AnnounceHero: FC<AnnounceHeroProps> = (props: AnnounceHeroProps) => {
    return (
        <PageHero
            upperAddon={<AnnounceAddon>{props.addon}</AnnounceAddon>}
            heading={<AnnounceHeading>{props.headingText}</AnnounceHeading>}
            paragraph={<AnnounceParagraph>{props.paragraphText}</AnnounceParagraph>}
            actions={props.actions}
        />
    );
};