import { TextField, ITextFieldProps } from "@fluentui/react";
import { useCallback } from "react";
import React from "react";

interface IProps extends ITextFieldProps {
	onChange: (value: any) => void;
}

export const MyTextField: React.FunctionComponent<IProps> = React.memo(props => {
	const { onChange } = props;

	const onChangeLocal = useCallback(
		(_: any, value: any) => {
			onChange(value.trim());
		},
		[onChange]
	);

	return <TextField {...props} onChange={onChangeLocal} />;
});
