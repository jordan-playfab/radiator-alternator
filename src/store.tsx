import { createStore, combineReducers } from "@reduxjs/toolkit";
import { siteSlice, ISiteState } from "./reducers/site";

export interface IAppState {
	site: ISiteState;
}

export interface IAppAction<T> {
	type: string;
	payload: T;
}

export const rootReducer = combineReducers({
	site: siteSlice.reducer,
});

export const store = createStore(rootReducer);
