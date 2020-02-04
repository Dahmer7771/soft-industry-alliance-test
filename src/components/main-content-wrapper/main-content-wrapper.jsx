import React from "react";
import "./main-content-wrapper.css";
import CountriesList from "../countries-list";
import CitiesList from "../cities-list";

const MainContentWrapper = ({ countryId, onCountrySelect }) => (
    <main className="main">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
                    <CountriesList
                        countryId={countryId}
                        onCountrySelect={(id) => onCountrySelect(id)}
                    />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
                    <CitiesList countryId={countryId} />
                </div>
            </div>
        </div>
    </main>
);

export default MainContentWrapper;
