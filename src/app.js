import React from "react"
import ReactDOM from "react-dom"

import "./styles/styles.scss"
import "normalize.css/normalize.scss"

import AppRouter, { history } from "./router/AppRoutes"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

ReactDOM.render(
	<MuiThemeProvider>
		<AppRouter />
	</MuiThemeProvider>,
	document.getElementById("app")
)
