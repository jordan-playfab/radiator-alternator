import { useState, useCallback } from "react";
import { PlayFabEconomy } from "playfab-sdk";
import { is } from "../../helpers/is";

interface IResult {
	errorMessage: string;

	getStores: () => Promise<PlayFabEconomyModels.GetStoreResult>;
}

export const useStore = (): IResult => {
	const [errorMessage, setErrorMessage] = useState("");

	const clearErrorMessage = () => setErrorMessage("");

	const getStores = useCallback(() => {
		clearErrorMessage();

		return new Promise<PlayFabEconomyModels.GetStoreResult>((resolve, reject) => {
			PlayFabEconomy.GetStoreByFriendlyId(
				{
					ExpandReferencedItems: true,
					FriendlyId: "cars",
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
	}, []);

	return {
		errorMessage,
		getStores,
	};
};
