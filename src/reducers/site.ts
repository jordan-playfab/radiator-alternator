import { createSlice } from "@reduxjs/toolkit";
import { IAppAction } from "../store";

export interface ISiteState {
	message: string;
}

export const initialState: ISiteState = {
	message: "",
};

export const siteSlice = createSlice({
	initialState,
	name: "site",
	reducers: {
		setMessage: (state, action: IAppAction<string>) => {
			return {
				...state,
				message: action.payload,
			};
		},
	},
});
