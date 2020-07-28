import React, { useEffect, useState, useCallback } from "react";
import { Page } from "./layout/page";
import { connect } from "react-redux";
import { IAppState } from "../store";
import { is } from "../helpers/is";
import { PlayFab, PlayFabClient } from "playfab-sdk";
import { TextField, Button } from "@fluentui/react";
import { Observable } from "redux";

interface IState {
	titleId: string;
	hasTitleId: boolean;
	userId: string;
	emailId: string;
	password: string;
}

type Props = IState;

const MainMenuPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, hasTitleId } = props;
	const [message, setMessage] = useState("");
	const [emailId, setEmailId] = useState("");
	const [userId, setuserId] = useState("");
	const [password, setpassword] = useState("");

	const onSetEmailID = useCallback((_: any, value: string) => {
		setEmailId(value.trim());
	}, []);

	const onSetUserId = useCallback((_: any, value: string) => {
		setuserId(value.trim());
	}, []);

	const onSetPassword = useCallback((_: any, value: string) => {
		setpassword(value.trim());
	}, []);

	const handleSubmit = () => {
		PlayFabClient.RegisterPlayFabUser(
			{
				Email: emailId,
				Password: password,
				TitleId: titleId,
				Username: userId,
			},
			(result, error) => {
				if (!is.null(error)) {
					setMessage(error.errorMessage);
					return;
				}

				if (result.code === 200) {
					setMessage("Success, somehow");
				} else {
					setMessage(result.errorMessage);
				}
			}
		);
	};

	useEffect(() => {
		if (!hasTitleId) {
			return;
		}

		// Attempt to log in, just for fun (it'll always throw an error)
		PlayFab.settings.titleId = titleId;
		PlayFab.settings.userId = userId;
		PlayFab.settings.emailId = emailId;
		PlayFab.settings.password = password;

		PlayFabClient.LoginWithCustomID(
			{
				CreateAccount: false,
				CustomId: new Date().getTime().toString(),
			},
			(result, error) => {
				if (!is.null(error)) {
					setMessage(error.errorMessage);
					return;
				}

				if (result.code === 200) {
					setMessage("Success, somehow");
				} else {
					setMessage(result.errorMessage);
				}
			}
		);
	}, [emailId, hasTitleId, password, titleId, userId]);

	return (
		<Page title="Main Menu">
			<h2>Title ID</h2>

			<p>Your title ID is {titleId}</p>
			<p>{message}</p>

			<h2>Create Player</h2>
			<p>
				<TextField style={{ width: "10%" }} label="UserId:" onChange={onSetUserId} />
			</p>
			<p>
				<TextField width="100px" label="Email:" onChange={onSetEmailID} />
			</p>
			<p>
				<TextField width="100px" label="Password:" onChange={onSetPassword} />
			</p>
			<p>
				<Button type="Submit" onClick={handleSubmit}>
					Create Player
				</Button>
			</p>
		</Page>
	);
});

export const MainMenuPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
	hasTitleId: state.site.hasTitleId,
	userId: state.site.userId,
	emailId: state.site.emailId,
	password: state.site.password,
}))(MainMenuPageBase);
