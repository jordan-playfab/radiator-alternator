import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { IndexPage } from "./components/index";
import { NotFoundPage } from "./components/not-found";
import { formatRoute } from "./helpers/routes";

export const routeNames = {
	Index: "/",
};

export const routes = {
	Index: () => formatRoute(routeNames.Index),
};

export const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={routeNames.Index} component={IndexPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};
