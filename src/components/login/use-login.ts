import { PlayFab, PlayFabClient } from "playfab-sdk";
import { useState, useEffect } from "react";
import { is } from "../../helpers/is";

interface IUseLoginResult {
	errorMessage: string;
	hasLoggedIn: boolean;
}

export const useLogin = (titleId: string): IUseLoginResult => {
	const [errorMessage, setErrorMessage] = useState("");
	const [hasLoggedIn, setHasLoggedIn] = useState(false);

	useEffect(() => {
		if (is.null(titleId)) {
			return;
		}

		// Obviously terrible temporary code
		PlayFab.settings.titleId = titleId;
		PlayFabClient.LoginWithCustomID(
			{
				CreateAccount: true,
				CustomId: "jordan",
			},
			(result, error) => {
				if (!is.null(error)) {
					setErrorMessage(error.errorMessage);
					return;
				}

				if (result.code === 200) {
					setErrorMessage("");
					setHasLoggedIn(true);
				} else {
					setErrorMessage(result.errorMessage);
				}
			}
		);
	}, [titleId]);

	return {
		hasLoggedIn,
		errorMessage,
	};
};
