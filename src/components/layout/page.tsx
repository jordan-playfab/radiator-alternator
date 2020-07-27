import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { is } from "../../helpers/is";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { Dispatch } from "redux";
import { siteSlice } from "../../reducers/site";
import { RouteComponentProps, withRouter } from "react-router";

interface IProps {
	title?: string;
	children?: React.ReactNode;
}

interface IState {
	titleId: string;
}

interface IDispatch {
	setTitleId: (titleId: string) => void;
}

type Props = IProps & IState & IDispatch & RouteComponentProps<any>;

const PageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { title, children, titleId, setTitleId, match } = props;

	const uriTitleId = match.params.titleId;

	useEffect(() => {
		if (titleId !== uriTitleId) {
			setTitleId(uriTitleId);
		}
	}, [setTitleId, titleId, uriTitleId]);

	return (
		<>
			{!is.null(title) && (
				<Helmet>
					<title>{title}</title>
				</Helmet>
			)}
			<div>
				<h1>{title}</h1>
				{children}
			</div>
		</>
	);
});

export const Page = connect<IState, IDispatch>(
	(state: IAppState) => ({
		titleId: state.site.titleId,
	}),
	(dispatch: Dispatch) => ({
		setTitleId: payload => dispatch(siteSlice.actions.setTitleId(payload)),
	})
)(withRouter(PageBase));
