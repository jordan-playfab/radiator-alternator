import React, { useState, useCallback, useEffect } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";
import { useGroup } from "./use-group";
import { MyTextField } from "../input/text-field";
import { PrimaryButton } from "@fluentui/react";

interface IState {
	titleId: string;
	hasPlayer: boolean;
}

type Props = IState;

const GroupPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, hasPlayer } = props;
	const { createGroup, errorMessage, listMembership } = useGroup();

	const [groupName, setGroupName] = useState("");
	const [yourGroups, setYourGroups] = useState<string[]>([]);

	const onCreateGroup = useCallback(() => {
		if (!hasPlayer) {
			return;
		}

		createGroup(groupName)
			.then(data => {
				setYourGroups([data.GroupName]);
			})
			.catch(() => {});
	}, [createGroup, groupName, hasPlayer]);

	useEffect(() => {
		if (!hasPlayer) {
			return;
		}

		listMembership().then(groups => {
			setYourGroups(groups.Groups.map(group => group.GroupName));
		});
	}, [hasPlayer, listMembership]);

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Group">
			<h2>Title ID {titleId}</h2>
			<p>{errorMessage}</p>

			{!is.null(yourGroups) && (
				<>
					<h3>Your groups</h3>
					<ul>
						{yourGroups.map(group => (
							<li key={group}>{group}</li>
						))}
					</ul>
				</>
			)}

			<h3>Create group</h3>
			<form onSubmit={onCreateGroup}>
				<MyTextField label="Group name" value={groupName} onChange={setGroupName} />
				<PrimaryButton onClick={onCreateGroup}>Create group</PrimaryButton>
			</form>
		</Page>
	);
});

export const GroupPage = connect<IState>((state: IAppState) => ({
	titleId: state.site.titleId,
	hasPlayer: state.site.hasPlayer,
}))(GroupPageBase);
