import React, { useCallback } from "react";

interface IProps {
	onSubmit: () => void;
}

export const MyForm: React.FunctionComponent<IProps> = React.memo(props => {
	const { onSubmit, children } = props;

	const onSubmitLocal = useCallback(
		(event: React.SyntheticEvent) => {
			event.preventDefault();
			onSubmit();
		},
		[onSubmit]
	);

	return <form onSubmit={onSubmitLocal}>{children}</form>;
});
