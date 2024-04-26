import {BaseHTMLAttributes, Children, FC, ReactNode} from "react";
import "@/app/scss/main.scss";
import classes from "./Header.module.scss";

interface HeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const Header: FC<HeaderProps> = ({className, ...props}: HeaderProps) => {
	return (
		<div className={`${classes.header__wrapper} ${className} ul-px-9 ul-py-4`} {...props}>
			<div className={`${classes.header__content} ul-width-1of1`}>
				<div className={`${classes.header__logo}`}>LOGO</div>
				<div className={`${classes.header__separator}`}>
					<hr />
				</div>
				<div className={`${classes.header__children} ul-flex ul-justify-content-space`}>
					{Children.toArray(props.children).map((child, key) => (
						<div key={key}>{child}</div>
					))}
				</div>
			</div>
		</div>
	);
};