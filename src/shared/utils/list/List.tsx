import {BaseHTMLAttributes, Children, FC, ReactNode} from "react";
import '@/app/scss/main.scss';

interface ListProps extends BaseHTMLAttributes<HTMLUListElement> {
    children: ReactNode;
}

export const List: FC<ListProps> = ({children, ...props}: ListProps) => {
    return (
        <ul {...props}>
            {
                Children
                    .toArray(children)
                    .map((child, key) => (
                        <li key={key}>{child}</li>
                    ))
            }
        </ul>
    );
};