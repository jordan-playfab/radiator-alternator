import { createSlice } from "@reduxjs/toolkit";
import { IAppAction } from "../store";
import { is } from "../helpers/is";

export interface ISiteState {
	titleId: string;
	hasTitleId: boolean;
}

export const initialState: ISiteState = {
	titleId: "",
	hasTitleId: false,
};

export const siteSlice = createSlice({
	initialState,
	name: "site",
	reducers: {
		setTitleId: (state, action: IAppAction<string>): ISiteState => {
			return {
				...state,
				titleId: action.payload,
				hasTitleId: !is.null(action.payload),
			};
		},
	},
});
