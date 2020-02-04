import React, { useCallback, useEffect, useState } from "react";
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
import withCountriesService from "../hoc/with-countries-service";

const ModalWindow = ({
    open, toggle, editCityId, getCityById, updateCityById, onCityUpdate,
}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [countryId, setCountryId] = useState(null);

    const fetchCity = useCallback((id) => {
        getCityById(id)
            .then((data) => {
                setTitle(data.title);
                setDesc(data.desc);
                setCountryId(data.country_id);
            });
    }, [getCityById]);

    const updateCity = (body) => {
        updateCityById(body)
            .then(() => toggle());
    };

    useEffect(() => {
        if (editCityId !== null) {
            fetchCity(editCityId);
        }
    }, [fetchCity, editCityId, open]);

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader toggle={toggle}>Изменить запись</ModalHeader>
            <ModalBody>
                <input
                    className="form-control"
                    style={{
                        marginBottom: "10px",
                    }}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="form-control"
                    rows="3"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={() => {
                        updateCity({
                            id: editCityId,
                            title,
                            desc,
                            country_id: countryId,
                        });
                        onCityUpdate();
                    }}
                >
                    Изменить
                </Button>
                {" "}
                <Button color="secondary" onClick={toggle}>Отмена</Button>
            </ModalFooter>
        </Modal>
    );
};

const mapMethodsToProps = (countriesService) => ({
    getCityById: countriesService.getCityById,
    updateCityById: countriesService.updateCityById,
});

export default withCountriesService(mapMethodsToProps)(ModalWindow);
