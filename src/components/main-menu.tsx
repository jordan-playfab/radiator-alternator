import React, { useEffect, useState } from "react";
import { Page } from "./layout/page";
import { connect } from "react-redux";
import { IAppState } from "../store";
import { is } from "../helpers/is";
import { PlayFab, PlayFabClient } from "playfab-sdk";

interface IState {
	titleId: string;
	hasTitleId: boolean;
}

type Props = IState;

const MainMenuPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, hasTitleId } = props;
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (!hasTitleId) {
			return;
		}

		// Attempt to log in, just for fun (it'll always throw an error)
		PlayFab.settings.titleId = titleId;
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
	}, [hasTitleId, titleId]);

	return (
		<Page title="Main Menu">
			<h2>Title ID</h2>

			<p>Your title ID is {titleId}</p>
			<p>{message}</p>
		</Page>
	);
});

export const MainMenuPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
	hasTitleId: state.site.hasTitleId,
}))(MainMenuPageBase);
