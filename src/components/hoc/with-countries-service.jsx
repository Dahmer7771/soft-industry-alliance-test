import React from "react";
import { CountriesServiceConsumer } from "../countries-context/countries-context";

const withCountriesService = (mapMethodsToProps) => (Wrapped) => (props) => (
    <CountriesServiceConsumer>
        {
            (countriesService) => {
                const serviceProps = mapMethodsToProps(countriesService);
                return <Wrapped {...props} {...serviceProps} />;
            }
        }
    </CountriesServiceConsumer>
);

export default withCountriesService;
