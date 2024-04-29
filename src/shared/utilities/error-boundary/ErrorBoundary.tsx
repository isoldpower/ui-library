import {Component, ErrorInfo, ReactNode} from "react";

type ErrorBoundaryProps = {
    fallback?: ReactNode;
    children: ReactNode;
}

type ErrorBoundaryState = {
    hasError: boolean;
    errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {fallback, children} = this.props;

        return hasError ? fallback : children;
    }
}