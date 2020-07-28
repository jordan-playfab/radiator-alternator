import { createSlice } from "@reduxjs/toolkit";
import { IAppAction } from "../store";

export interface ISiteState {
	titleId: string;
	hasPlayer: boolean;
	group: PlayFabClientModels.EntityKey;
}

export const initialState: ISiteState = {
	titleId: "",
	hasPlayer: false,
	group: null,
};

export const siteSlice = createSlice({
	initialState,
	name: "site",
	reducers: {
		setTitleId: (state, action: IAppAction<string>): ISiteState => ({
			...state,
			titleId: action.payload,
		}),
		setHasPlayer: (state): ISiteState => ({
			...state,
			hasPlayer: true,
		}),
		setGroup: (state, action: IAppAction<PlayFabClientModels.EntityKey>): ISiteState => ({
			...state,
			group: action.payload,
		}),
	},
});
