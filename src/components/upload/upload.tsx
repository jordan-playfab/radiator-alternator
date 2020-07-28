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

const UploadPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Upload">
			<h2>Title ID {titleId}</h2>

			<p>This will be the upload page. Eventually.</p>
		</Page>
	);
});

export const UploadPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(UploadPageBase);
