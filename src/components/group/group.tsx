import React, { useState, useCallback } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";
import { useGroup } from "./use-group";
import { MyTextField } from "../input/text-field";
import { Button } from "@fluentui/react";

interface IState {
	titleId: string;
}

type Props = IState;

const GroupPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId } = props;
	const { createGroup, errorMessage } = useGroup();

	const [groupName, setGroupName] = useState("");

	const onCreateGroup = useCallback(() => {
		createGroup(groupName)
			.then(data => {
				console.log(data);
			})
			.catch(() => {
				console.log("Crud, now what?");
			});
	}, [createGroup, groupName]);

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Group">
			<h2>Title ID {titleId}</h2>
			<p>{errorMessage}</p>

			<h3>Create group</h3>
			<form onSubmit={onCreateGroup}>
				<MyTextField label="Group name" value={groupName} onChange={setGroupName} />
				<Button onClick={onCreateGroup}>Create group</Button>
			</form>
		</Page>
	);
});

export const GroupPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
}))(GroupPageBase);
