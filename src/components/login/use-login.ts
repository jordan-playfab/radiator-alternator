import { PlayFab, PlayFabClient } from "playfab-sdk";
import { useState, useCallback } from "react";
import { is } from "../../helpers/is";

interface IUseLoginResult {
	errorMessage: string;

	loginWithEmail: (email: string, password: string) => Promise<PlayFabClientModels.LoginResult>;
	loginWithUsername: (username: string, password: string) => Promise<PlayFabClientModels.LoginResult>;
}

export const useLogin = (titleId: string): IUseLoginResult => {
	const [errorMessage, setErrorMessage] = useState("");

	const clearErrorMessage = () => setErrorMessage("");

	const loginWithEmail = useCallback(
		(email: string, password: string) => {
			clearErrorMessage();

			return new Promise<PlayFabClientModels.LoginResult>((resolve, reject) => {
				PlayFab.settings.titleId = titleId;
				PlayFabClient.LoginWithEmailAddress(
					{
						Email: email,
						Password: password,
					},
					(error, result) => {
						if (!is.null(error)) {
							reject(error.errorMessage);
							setErrorMessage(error.errorMessage);
							return;
						}

						resolve(result.data);
					}
				);
			});
		},
		[titleId]
	);

	const loginWithUsername = useCallback(
		(username: string, password: string) => {
			clearErrorMessage();

			return new Promise<PlayFabClientModels.LoginResult>((resolve, reject) => {
				PlayFab.settings.titleId = titleId;
				PlayFabClient.LoginWithPlayFab(
					{
						Username: username,
						Password: password,
					},
					(error, result) => {
						if (!is.null(error)) {
							reject(error.errorMessage);
							setErrorMessage(error.errorMessage);
							return;
						}

						resolve(result.data);
					}
				);
			});
		},
		[titleId]
	);

	return {
		errorMessage,
		loginWithEmail,
		loginWithUsername,
	};
};
