import React, { useState, useCallback, useEffect } from "react";
import { Page } from "../layout/page";
import { connect } from "react-redux";
import { IAppState } from "../../store";
import { is } from "../../helpers/is";
import { GetTitleId } from "../layout/get-title-id";
import { useGroup } from "./use-group";
import { MyTextField } from "../input/text-field";
import { PrimaryButton } from "@fluentui/react";
import { siteSlice } from "../../reducers/site";
import { Dispatch } from "redux";
import { GroupInlineButton } from "./group-inline";
import { RouteComponentProps } from "react-router-dom";
import { routes } from "../../router";

interface IState {
	titleId: string;
	hasPlayer: boolean;
}

interface IDispatch {
	setGroup: (group: PlayFabClientModels.EntityKey) => void;
}

type Props = IState & IDispatch & RouteComponentProps;

const GroupPageBase: React.FunctionComponent<Props> = React.memo(props => {
	const { titleId, hasPlayer, setGroup, history } = props;
	const { createGroup, errorMessage, listMembership } = useGroup();

	const [groupName, setGroupName] = useState("");
	const [yourGroups, setYourGroups] = useState<PlayFabGroupsModels.GroupWithRoles[]>([]);

	const onSelectGroup = useCallback(
		(group: PlayFabClientModels.EntityKey) => {
			setGroup(group);

			history.push(routes.Store(titleId));
		},
		[history, setGroup, titleId]
	);

	const onCreateGroup = useCallback(() => {
		if (!hasPlayer) {
			return;
		}

		createGroup(groupName)
			.then(data => {
				onSelectGroup(data.Group);
			})
			.catch(() => {});
	}, [createGroup, groupName, hasPlayer, onSelectGroup]);

	useEffect(() => {
		if (!hasPlayer) {
			return;
		}

		listMembership().then(groups => {
			setYourGroups(groups.Groups);
		});
	}, [hasPlayer, listMembership]);

	if (is.null(titleId)) {
		return <GetTitleId />;
	}

	return (
		<Page title="Group">
			<p>{errorMessage}</p>

			{is.null(yourGroups) ? (
				<>
					<h3>Create group</h3>
					<form onSubmit={onCreateGroup}>
						<MyTextField label="Group name" value={groupName} onChange={setGroupName} />
						<PrimaryButton onClick={onCreateGroup}>Create group</PrimaryButton>
					</form>
				</>
			) : (
				<>
					<h3>Your groups</h3>
					<ul>
						{yourGroups.map(group => (
							<li key={group.Group.Id}>
								<GroupInlineButton
									entityKey={group.Group}
									name={group.GroupName}
									onClick={onSelectGroup}
								/>
							</li>
						))}
					</ul>
				</>
			)}
		</Page>
	);
});

export const GroupPage = connect<IState, IDispatch>(
	(state: IAppState) => ({
		titleId: state.site.titleId,
		hasPlayer: state.site.hasPlayer,
	}),
	(dispatch: Dispatch) => ({
		setGroup: payload => dispatch(siteSlice.actions.setGroup(payload)),
	})
)(GroupPageBase);
