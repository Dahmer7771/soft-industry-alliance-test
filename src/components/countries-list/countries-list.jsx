import React, { useEffect, useState } from "react";
import "./countries-list.css";
import CountriesListItem from "../countries-list-item";
import withCountriesService from "../hoc/with-countries-service";

const CountriesList = ({ getCountries, onCountrySelect, countryId }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCountries()
            .then((data) => {
                setCountries(data);
                setLoading(false);
            });
    }, [getCountries]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="countries mb-sm-2">
            <h4>Countries</h4>
            <div className="countries-list">
                {countries.map((item) => (
                    <CountriesListItem
                        key={item.id}
                        active={item.id === countryId}
                        onCountrySelect={(id) => onCountrySelect(id)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

const mapMethodsToProps = (countriesService) => ({
    getCountries: countriesService.getCountries,
});

export default withCountriesService(mapMethodsToProps)(CountriesList);
