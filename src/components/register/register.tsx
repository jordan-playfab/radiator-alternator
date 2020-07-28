import React, { useState, useCallback } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useRegister } from "./use-register";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";
import { MyTextField } from "../input/text-field";
import { PrimaryButton } from "@fluentui/react";
import { MyForm } from "../input/form";
import { routes } from "../../router";

interface IState {
	titleId: string;
}

type Props = IState & RouteComponentProps;

const RegisterPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, history } = props;
	const { errorMessage, registerPlayer } = useRegister(titleId);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onRegisterPlayer = useCallback(() => {
		registerPlayer(username, email, password)
			.then(() => {
				history.push(routes.Group(titleId));
			})
			.catch(() => {});
	}, [email, history, password, registerPlayer, titleId, username]);

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Register">
			<h2>Title ID {titleId}</h2>
			<p>{errorMessage}</p>

			<MyForm onSubmit={onRegisterPlayer}>
				<h3>Create Player</h3>
				<MyTextField label="Username" onChange={setUsername} value={username} />
				<MyTextField label="Email" onChange={setEmail} />
				<MyTextField label="Password" type="password" onChange={setPassword} />
				<PrimaryButton type="submit">Create Player</PrimaryButton>
			</MyForm>
		</Page>
	);
});

export const RegisterPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(withRouter(RegisterPageBase));
