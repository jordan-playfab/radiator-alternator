import React, { useCallback } from "react";
import { PrimaryButton } from "@fluentui/react";

interface IProps {
	name: string;
	entityKey: PlayFabClientModels.EntityKey;

	onClick: (entityKey: PlayFabClientModels.EntityKey) => void;
}

export const GroupInlineButton: React.FunctionComponent<IProps> = React.memo(props => {
	const { entityKey, name, onClick } = props;

	const onClickLocal = useCallback(() => {
		onClick(entityKey);
	}, [entityKey, onClick]);

	return <PrimaryButton onClick={onClickLocal}>{name}</PrimaryButton>;
});
