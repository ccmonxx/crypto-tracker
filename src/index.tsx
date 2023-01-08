import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { FontStyle } from "./styles/FontStyle";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyle />
			<FontStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
