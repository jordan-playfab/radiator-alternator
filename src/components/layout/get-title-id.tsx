import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { Dispatch } from "redux";
import { siteSlice } from "../../reducers/site";
import { RouteComponentProps, withRouter } from "react-router";

interface IProps {
	title?: string;
}

interface IState {
	titleId: string;
}

interface IDispatch {
	setTitleId: (titleId: string) => void;
}

type Props = IProps & IState & IDispatch & RouteComponentProps<any>;

const GetTitleIdBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, setTitleId, match } = props;

	const uriTitleId = match.params.titleid;

	useEffect(() => {
		if (titleId !== uriTitleId) {
			setTitleId(uriTitleId);
		}
	}, [setTitleId, titleId, uriTitleId]);

	return null;
});

export const GetTitleId = connect<IState, IDispatch>(
	(state: IAppState) => ({
		titleId: state.site.titleId,
	}),
	(dispatch: Dispatch) => ({
		setTitleId: payload => dispatch(siteSlice.actions.setTitleId(payload)),
	})
)(withRouter(GetTitleIdBase));
