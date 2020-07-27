import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import { App } from "./app";
import { store } from "./store";

import * as serviceWorker from "./serviceWorker";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

serviceWorker.register();
