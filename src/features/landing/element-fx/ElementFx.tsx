import {FC, ReactNode, Suspense} from "react";
import '@/app/scss/main.scss';
import {ErrorBoundary} from "@/shared/utilities";

interface ElementFxProps {
    children: ReactNode;
    errorFallback: ReactNode;
    fetchFallback: ReactNode;
}

export const ElementFx: FC<ElementFxProps> = (props: ElementFxProps) => {
    return (
        <ErrorBoundary fallback={props.errorFallback}>
            <Suspense fallback={props.fetchFallback}>
                {props.children}
            </Suspense>
        </ErrorBoundary>
    );
};