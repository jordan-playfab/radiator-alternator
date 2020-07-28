import React, { useEffect } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useLogin } from "./use-login";

interface IState {
	titleId: string;
}

type Props = IState & RouteComponentProps;

const LoginPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;
	const { errorMessage, hasLoggedIn } = useLogin(titleId);

	useEffect(() => {
		if (!hasLoggedIn) {
			return;
		}
	}, [hasLoggedIn]);

	return (
		<Page title="Login">
			<h2>Title ID {titleId}</h2>
			<p>{errorMessage}</p>
		</Page>
	);
});

export const LoginPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(withRouter(LoginPageBase));
