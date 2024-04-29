import {BaseHTMLAttributes, Children, FC, ReactNode} from "react";
import "@/app/scss/main.scss";
import classes from "./Footer.module.scss";

interface FooterProps extends BaseHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const Footer: FC<FooterProps> = ({className, children, ...props}: FooterProps) => {
	return (
		<div className={`${classes.footer__wrapper} ${className} ul-py-6 ul-tablet-py-0`} {...props}>
			<div className={`${classes.footer__content}`}>
				{Children.toArray(children).map((child, key) => (
					<div className={`${classes.footer__child}`} key={key}>{child}</div>
				))}
			</div>
		</div>
	);
};