import React from "react";
import "./countries-list-item.css";

const CountriesListItem = ({
    id, title, text, onCountrySelect, active,
}) => (
    <div className={`card custom-card${active ? " active-card" : ""}`} onClick={() => onCountrySelect(id)}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    </div>
);

export default CountriesListItem;
