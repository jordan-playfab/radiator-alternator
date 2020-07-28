import React from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";

interface IState {
	titleId: string;
}

type Props = IState;

const StorePageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Store">
			<p>List of things you can buy for yourself (assuming you're in a group)</p>
		</Page>
	);
});

export const StorePage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(StorePageBase);
