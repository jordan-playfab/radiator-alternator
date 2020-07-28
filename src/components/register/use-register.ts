import { PlayFab, PlayFabClient } from "playfab-sdk";
import { useState, useCallback } from "react";
import { is } from "../../helpers/is";

interface IUseLoginResult {
	errorMessage: string;

	registerPlayer: (
		userName: string,
		email: string,
		password: string
	) => Promise<PlayFabClientModels.RegisterPlayFabUserResult>;
}

export const useRegister = (titleId: string): IUseLoginResult => {
	const [errorMessage, setErrorMessage] = useState("");

	const clearErrorMessage = () => setErrorMessage("");

	const registerPlayer = useCallback(
		(userName: string, email: string, password: string) => {
			clearErrorMessage();

			return new Promise<PlayFabClientModels.RegisterPlayFabUserResult>((resolve, reject) => {
				PlayFab.settings.titleId = titleId;
				PlayFabClient.RegisterPlayFabUser(
					{
						Email: email,
						Password: password,
						Username: userName,
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
		registerPlayer,
	};
};
