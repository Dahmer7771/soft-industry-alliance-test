import React, { useState } from "react";
import "./add-city.css";
import withCountriesService from "../hoc/with-countries-service";

const onAddCity = (e, title, text, addCity, countryId, onCityAdd) => {
    if (title.length > 0 && text.length > 0) {
        addCity(title, text, countryId)
            .then(() => onCityAdd());
    }
};

const AddButton = ({ setAdd }) => (
    <button type="button" onClick={() => setAdd(true)} className="btn btn-primary">+ Add city</button>
);

const AddForm = ({
    titleInput,
    setTitleInput,
    textInput,
    setTextInput,
    setAdd,
    addCity,
    countryId,
    onCityAdd,
}) => (
    <form className="add-form">
        <h5>Add city</h5>
        <input
            className="form-control"
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
        />
        <textarea
            className="form-control"
            id="addFormTextArea"
            rows="3"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
        />
        <div className="add-form__buttons-wrapper">
            <button
                className="btn btn-primary add-form__submit-button"
                type="button"
                onClick={(e) => {
                    onAddCity(e, titleInput, textInput, addCity, countryId, onCityAdd);
                    setTitleInput("");
                    setTextInput("");
                    setAdd(false);
                }}
            >
                Submit
            </button>
            <button
                className="btn btn-light add-form__cancel-button"
                type="button"
                onClick={() => setAdd(false)}
            >
                Cancel
            </button>
        </div>
    </form>
);

const AddCity = ({ addCity, countryId, onCityAdd }) => {
    const [add, setAdd] = useState(false);
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");

    return (
        <li className="list-group-item">
            {add
                ? (
                    <AddForm
                        titleInput={titleInput}
                        textInput={textInput}
                        setTitleInput={setTitleInput}
                        setTextInput={setTextInput}
                        setAdd={setAdd}
                        addCity={addCity}
                        countryId={countryId}
                        onCityAdd={onCityAdd}
                    />
                )
                : <AddButton setAdd={setAdd} />}
        </li>
    );
};

const mapMethodsToProps = (countriesService) => ({
    addCity: countriesService.addCity,
});

export default withCountriesService(mapMethodsToProps)(AddCity);
