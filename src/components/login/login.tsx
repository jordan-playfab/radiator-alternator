import React, { useState, useCallback } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useLogin } from "./use-login";
import { MyForm } from "../input/form";
import { routes } from "../../router";
import { MyTextField } from "../input/text-field";
import { is } from "../../helpers/is";
import { PrimaryButton } from "@fluentui/react";

interface IState {
	titleId: string;
}

type Props = IState & RouteComponentProps;

const LoginPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, history } = props;
	const { errorMessage, loginWithEmail, loginWithUsername } = useLogin(titleId);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = useCallback(() => {
		if (!is.null(email)) {
			loginWithEmail(email, password)
				.then(() => {
					history.push(routes.Group(titleId));
				})
				.catch(() => {});
		} else {
			loginWithUsername(username, password)
				.then(() => {
					history.push(routes.Group(titleId));
				})
				.catch(() => {});
		}
	}, [email, history, loginWithEmail, loginWithUsername, password, titleId, username]);

	return (
		<Page title="Login">
			<h2>Title ID {titleId}</h2>
			<p>{errorMessage}</p>
			<MyForm onSubmit={onSubmit}>
				<fieldset>
					<legend>Fill in one</legend>
					<MyTextField label="Username" onChange={setUsername} value={username} />
					<p>or</p>
					<MyTextField label="Email" onChange={setEmail} />
				</fieldset>
				<fieldset>
					<legend>Password</legend>
					<MyTextField label="Password" type="password" onChange={setPassword} />
				</fieldset>

				<PrimaryButton type="submit">Login</PrimaryButton>
			</MyForm>
		</Page>
	);
});

export const LoginPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(withRouter(LoginPageBase));
