import React from "react";
import { Page } from "./layout/page";
import { connect } from "react-redux";
import { IAppState } from "../store";

interface IState {
	titleId: string;
}

type Props = IState;

const MainMenuPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;

	return (
		<Page title="Main Menu">
			<h2>Title ID</h2>

			<p>Your title ID is {titleId}</p>
		</Page>
	);
});

export const MainMenuPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(MainMenuPageBase);
