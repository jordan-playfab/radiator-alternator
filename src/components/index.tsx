import React, { useState, useCallback } from "react";
import { Page } from "./layout/page";
import { TextField, Button } from "@fluentui/react";
import { is } from "../helpers/is";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { siteSlice } from "../reducers/site";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { routes } from "../router";

interface IDispatch {
	saveTitleId: (titleId: string) => void;
}

type Props = IDispatch & RouteComponentProps;

const IndexPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { saveTitleId, history } = props;

	const [titleId, setTitleID] = useState("");

	const onSetTitleID = useCallback((_: any, value: string) => {
		setTitleID(value.trim());
	}, []);

	const onSubmit = useCallback(() => {
		if (is.null(titleId)) {
			return;
		}

		saveTitleId(titleId);
		history.push(routes.MainMenu(titleId));
	}, [history, saveTitleId, titleId]);

	return (
		<Page>
			<h2>Title ID</h2>

			<form onSubmit={onSubmit}>
				<TextField label="Title ID" onChange={onSetTitleID} value={titleId} autoFocus />

				<Button onClick={onSubmit}>Set title ID</Button>
			</form>
		</Page>
	);
});

export const IndexPage = connect<undefined, IDispatch>(null, (dispatch: Dispatch) => ({
	saveTitleId: payload => dispatch(siteSlice.actions.setTitleId(payload)),
}))(withRouter(IndexPageBase));
