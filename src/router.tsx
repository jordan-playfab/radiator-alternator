import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { IndexPage } from "./components/index";
import { NotFoundPage } from "./components/not-found";
import { formatRoute } from "./helpers/routes";
import { MainMenuPage } from "./components/main-menu";
import { UploadPage } from "./components/upload/upload";
import { GroupPage } from "./components/group/group";
import { RegisterPage } from "./components/register/register";
import { LoginPage } from "./components/login/login";

export const routeNames = {
	Index: "/",
	MainMenu: "/:titleid/main-menu",
	Upload: "/:titleid/upload",
	Register: "/:titleid/register",
	Login: "/:titleid/login",
	Group: "/:titleid/group",
};

export const routes = {
	Index: () => formatRoute(routeNames.Index),
	MainMenu: (titleId: string) => formatRoute(routeNames.MainMenu, titleId),
	Upload: (titleId: string) => formatRoute(routeNames.Upload, titleId),
	Group: (titleId: string) => formatRoute(routeNames.Group, titleId),
	Register: (titleId: string) => formatRoute(routeNames.Register, titleId),
	Login: (titleId: string) => formatRoute(routeNames.Login, titleId),
};

export const Router: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={routeNames.Index} component={IndexPage} />
				<Route exact path={routeNames.MainMenu} component={MainMenuPage} />
				<Route exact path={routeNames.Upload} component={UploadPage} />
				<Route exact path={routeNames.Group} component={GroupPage} />
				<Route exact path={routeNames.Register} component={RegisterPage} />
				<Route exact path={routeNames.Login} component={LoginPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};
