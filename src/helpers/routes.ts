import { is } from "./is";

export const formatRoute = (original: string, ...args: any[]): string => {
	if (is.null(args)) {
		return original;
	}

	if (is.null(original)) {
		return "";
	}

	const replaceRegEx = new RegExp("((?::)[a-z?]+)");

	let returnString = original;

	for (let i = 0; i < args.length; i++) {
		returnString = returnString.replace(replaceRegEx, args[i]);
	}

	return returnString;
};
