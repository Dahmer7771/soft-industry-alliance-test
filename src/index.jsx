import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { CountriesServiceProvider } from "./components/countries-context/countries-context";
import CountriesService from "./services/countries-service";

const countriesService = new CountriesService();

ReactDOM.render(
    <CountriesServiceProvider value={countriesService}>
        <App />
    </CountriesServiceProvider>,
    document.getElementById("root"),
);
