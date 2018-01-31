import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "@fortawesome/fontawesome";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App>
        {/* Stylesheets are for the carousel on the portfolio page. fix later */}
        <link
          href="/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Archivo+Narrow"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abel"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </App>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
