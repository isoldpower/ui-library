import {FC, ReactNode, Suspense} from "react";
import '@/app/scss/main.scss';
import {ErrorBoundary} from "@/shared/utilities";

interface ElementFxProps {
    children: ReactNode;
    errorFallback: ReactNode;
    fetchFallback: ReactNode;
}

export const ElementFx: FC<ElementFxProps> = ({...elements}: ElementFxProps) => {
    return (
        <ErrorBoundary fallback={elements.errorFallback}>
            <Suspense fallback={elements.fetchFallback}>
                {elements.children}
            </Suspense>
        </ErrorBoundary>
    );
};