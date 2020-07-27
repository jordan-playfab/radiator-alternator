import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule, ThemeProps } from "styled-components";

export type SiteStyleOptions = "AUTO" | "LIGHT" | "DARK";

export interface ITheme {
	color: IThemeColors;
	font: string;
	fontSize: IThemeFontSize;
	spacer: IThemeSpacer;
	breakpoint: IThemeBreakpoint;
	breakpointMax: IThemeBreakpoint;
	breakpointUnits: IThemeBreakpoint;
}

interface IThemeColors {
	background: string;
	border: string;

	text: string;
	link: string;
}

interface IThemeSpacer {
	xxs: string;
	xs: string;
	s: string;
	m: string;
	l: string;
	xl: string;
	base: number;
	unit: string;
}

interface IThemeFontSize {
	xxxl: string;
	xxl: string;
	xl: string;
	l: string;
	m: string;
	s: string;
	xs: string;
}

interface IThemeBreakpoint {
	xxs: string;
	xs: string;
	s: string;
	m: string;
	l: string;
	xl: string;
}

const breakpoints: IThemeBreakpoint = {
	xxs: "240px",
	xs: "320px",
	s: "480px",
	m: "768px",
	l: "1024px",
	xl: "1280px",
};

const breakpointsMax: IThemeBreakpoint = {
	xxs: "239px",
	xs: "319px",
	s: "479px",
	m: "767px",
	l: "1023px",
	xl: "1279px",
};

const spacer = 1;
const unit = "rem";
const fontGeneric = `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif`;

const colors = {
	grey000: "#111",
	grey100: "#1c1c1c",
	grey200: "#333",
	grey400: "#666",
	grey600: "#9F9F9F",
	grey800: "#d6d6d6",
	grey900: "#f6f6f6",
	grey999: "#fff",

	blue500: "#3497FD",

	red500: "#FF4F9A",
};

const colorNamesLight: IThemeColors = {
	background: colors.grey999,
	border: colors.grey800,

	text: colors.grey200,
	link: colors.blue500,
};

const defaultTheme: ITheme = {
	color: colorNamesLight,
	font: fontGeneric,
	fontSize: {
		xxxl: "60px",
		xxl: "38px",
		xl: "28px",
		l: "24px",
		m: "20px",
		s: "18px",
		xs: "15px",
	},
	spacer: {
		xxs: `${spacer / 4 + unit}`,
		xs: `${spacer / 2 + unit}`,
		s: `${spacer + unit}`,
		m: `${spacer * 2 + unit}`,
		l: `${spacer * 4 + unit}`,
		xl: `${spacer * 7 + unit}`,
		base: spacer,
		unit,
	},
	breakpoint: {
		xxs: `(min-width: ${breakpoints.xxs})`,
		xs: `(min-width: ${breakpoints.xs})`,
		s: `(min-width: ${breakpoints.s})`,
		m: `(min-width: ${breakpoints.m})`,
		l: `(min-width: ${breakpoints.l})`,
		xl: `(min-width: ${breakpoints.xl})`,
	},
	breakpointMax: {
		xxs: `(max-width: ${breakpointsMax.xxs})`,
		xs: `(max-width: ${breakpointsMax.xs})`,
		s: `(max-width: ${breakpointsMax.s})`,
		m: `(max-width: ${breakpointsMax.m})`,
		l: `(max-width: ${breakpointsMax.l})`,
		xl: `(max-width: ${breakpointsMax.xl})`,
	},
	breakpointUnits: breakpoints,
};

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	withTheme,
	ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export interface IWithTheme extends ThemeProps<ITheme> {}

const GlobalStyle = createGlobalStyle`
html {
    margin: 0;
    padding: 0;
	background-color: ${s => s.theme.color.background};
}

body {
	-webkit-font-smoothing: antialiased;
    font-family: ${s => s.theme.font};
	font-size: ${s => s.theme.fontSize.s};
	font-weight: normal;
    line-height: 1.45;
	color: ${s => s.theme.color.text};
    margin: 0;
    padding: 0;
}

a, a:visited {
    color: ${s => s.theme.color.link};
    text-decoration: none;
	font-weight: 600;

	&:hover {
		text-decoration: underline;
	}
}

img {
	max-width: 100%;
}

div, p, ul, li, button, footer, header, main {
	box-sizing: border-box;
}
`;

export { css, keyframes, ThemeProvider, defaultTheme, withTheme, createGlobalStyle, GlobalStyle };
export default styled;
