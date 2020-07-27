import { createSlice } from "@reduxjs/toolkit";
import { IAppAction } from "../store";

export interface ISiteState {
	titleId: string;
}

export const initialState: ISiteState = {
	titleId: "",
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
	},
});
