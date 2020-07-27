import React from "react";
import { connect } from "react-redux";

import { Router } from "./router";
import { GlobalStyle, defaultTheme, ThemeProvider } from "./styles";
import { IAppState } from "./store";

interface IState {
	titleId: string;
}

type Props = IState;

const AppBase: React.FunctionComponent<Props> = React.memo(props => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
});

export const App = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(AppBase);
