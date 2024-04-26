import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import {App} from "@/app/App";
import {HomeLazy} from "@/pages/landing";
import {routePaths} from "@/shared/constants";
import {ComponentsLazy} from "@/pages/toolkit";

const defaultFallback = <div>Loading...</div>;

const routes = [
	{
		path: '/',
		element: (
			<Suspense fallback={defaultFallback}>
				<App/>
			</Suspense>
		),
		children: [
			{
				path: routePaths.home,
				element: (
					<Suspense fallback={defaultFallback}>
						<HomeLazy/>
					</Suspense>
				)
			},
			{
				path: routePaths.components,
				element: (
					<Suspense fallback={defaultFallback}>
						<ComponentsLazy />
					</Suspense>
				)
			}
		]
	}
];

export const router = createBrowserRouter(routes);
export default routes;