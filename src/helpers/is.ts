import { SiteStyleOptions } from "../styles";

function IsArray(data: any): boolean {
	if (data === null || typeof data === "undefined") {
		return false;
	}

	return data.constructor === Array;
}

function IsNull(data: any): boolean {
	return (
		typeof data === "undefined" ||
		data === null ||
		(typeof data === "string" && data.length === 0) ||
		(IsArray(data) && data.length === 0)
	);
}

function IsJsonString(data: any): boolean {
	try {
		JSON.parse(data);

		return true;
	} catch {
		return false;
	}
}

function IsNumeric(data: any): boolean {
	return (
		typeof data !== "undefined" &&
		data !== null &&
		data.toString().length > 0 &&
		data.toString().replace(/[\d.]+/gi, "").length === 0 &&
		!isNaN(data)
	);
}

function IsString(data: any): boolean {
	return !IsNull(data) && typeof data === "string";
}

function IsInArray(array: any[], obj: any): boolean {
	return !is.null(array) && array.indexOf(obj) !== -1;
}

function IsTouchDevice(): boolean {
	return "ontouchstart" in window;
}

function IsInstalled(): boolean {
	return "standalone" in window.navigator && (window.navigator as any).standalone;
}

function IsDarkMode(style: SiteStyleOptions): boolean {
	return style === "DARK" || (style === "AUTO" && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

export const is = {
	array: IsArray,
	null: IsNull,
	numeric: IsNumeric,
	string: IsString,
	jsonString: IsJsonString,
	inArray: IsInArray,
	touchDevice: IsTouchDevice,
	installed: IsInstalled,
	darkMode: IsDarkMode,
};
