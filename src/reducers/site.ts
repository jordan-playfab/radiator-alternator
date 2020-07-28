import { createSlice } from "@reduxjs/toolkit";
import { IAppAction } from "../store";

export interface ISiteState {
	titleId: string;
	hasPlayer: boolean;
}

export const initialState: ISiteState = {
	titleId: "",
	hasPlayer: false,
};

export const siteSlice = createSlice({
	initialState,
	name: "site",
	reducers: {
		setTitleId: (state, action: IAppAction<string>): ISiteState => {
			return {
				...state,
				titleId: action.payload,
			};
		},
		setHasPlayer: (state): ISiteState => ({
			...state,
			hasPlayer: true,
		}),
	},
});
