import { PlayFabGroups } from "playfab-sdk";
import { useState, useCallback } from "react";
import { is } from "../../helpers/is";

interface IResult {
	errorMessage: string;

	createGroup: (name: string) => Promise<PlayFabGroupsModels.CreateGroupResponse>;
	listMembership: () => Promise<PlayFabGroupsModels.ListMembershipResponse>;
}

export const useGroup = (): IResult => {
	const [errorMessage, setErrorMessage] = useState("");

	const clearErrorMessage = () => setErrorMessage("");

	const createGroup = useCallback((name: string) => {
		clearErrorMessage();

		return new Promise<PlayFabGroupsModels.CreateGroupResponse>((resolve, reject) => {
			PlayFabGroups.CreateGroup(
				{
					GroupName: name,
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

	const listMembership = useCallback(() => {
		clearErrorMessage();

		return new Promise<PlayFabGroupsModels.ListMembershipResponse>((resolve, reject) => {
			PlayFabGroups.ListMembership({}, (error, result) => {
				if (!is.null(error)) {
					reject(error.errorMessage);
					setErrorMessage(error.errorMessage);
					return;
				}

				resolve(result.data);
			});
		});
	}, []);

	return {
		errorMessage,
		createGroup,
		listMembership,
	};
};
