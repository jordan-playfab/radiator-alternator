import React from "react";
import { Page } from "./layout/page";
import { connect } from "react-redux";
import { IAppState } from "../store";
import { Link } from "react-router-dom";
import { routes } from "../router";
import { is } from "../helpers/is";
import { GetTitleId } from "./layout/get-title-id";

interface IState {
	titleId: string;
}

type Props = IState;

const MainMenuPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Main Menu">
			<ul>
				<li>
					<Link to={routes.Upload(titleId)}>Upload</Link>
				</li>
				<li>
					<Link to={routes.Register(titleId)}>Register</Link>
				</li>
				<li>
					<Link to={routes.Login(titleId)}>Login</Link>
				</li>
			</ul>
		</Page>
	);
});

export const MainMenuPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(MainMenuPageBase);
