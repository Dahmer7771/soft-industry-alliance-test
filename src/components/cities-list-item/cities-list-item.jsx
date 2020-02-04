import React from "react";
import "./cities-list-item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPencilAlt,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import withCountriesService from "../hoc/with-countries-service";

const CitiesListItem = ({
    id, title, desc, deleteCity, onCityDelete, modalToggle, onEdit,
}) => (
    <li className="list-group-item cities-list-item">
        <div className="cities-list-item__text-wrapper">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
        </div>
        <button
            type="button"
            className="btn"
            onClick={() => {
                modalToggle();
                onEdit(id);
            }}
        >
            <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button
            type="button"
            className="btn"
            onClick={() => {
                deleteCity(id)
                    .then(() => onCityDelete());
            }}
        >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    </li>
);

const mapMethodsToProps = (countriesService) => ({
    deleteCity: countriesService.deleteCity,
});

export default withCountriesService(mapMethodsToProps)(CitiesListItem);
