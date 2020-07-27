import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { IndexPage } from "./components/index";
import { NotFoundPage } from "./components/not-found";
import { formatRoute } from "./helpers/routes";
import { MainMenuPage } from "./components/main-menu";

export const routeNames = {
	Index: "/",
	MainMenu: "/:titleid/main-menu",
};

export const routes = {
	Index: () => formatRoute(routeNames.Index),
	MainMenu: (titleId: string) => formatRoute(routeNames.MainMenu, titleId),
};

export const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={routeNames.Index} component={IndexPage} />
				<Route exact path={routeNames.MainMenu} component={MainMenuPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};
