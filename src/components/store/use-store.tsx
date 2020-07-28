import { useState, useCallback } from "react";
import { PlayFabEconomy } from "playfab-sdk";

interface IResult {
	errorMessage: string;

	getStores: () => any[];
}

export const useStore = (): IResult => {
	const [errorMessage, setErrorMessage] = useState("");

	const clearErrorMessage = () => setErrorMessage("");

	const getStores = useCallback(() => {
		clearErrorMessage();

		return [];
	}, []);

	return {
		errorMessage,
		getStores,
	};
};
