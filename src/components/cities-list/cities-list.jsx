import React, { useCallback, useEffect, useState } from "react";
import CitiesListItem from "../cities-list-item";
import AddCity from "../add-city";
import withCountriesService from "../hoc/with-countries-service";
import ModalWindow from "../modal";

const CitiesList = ({ getCitiesOfCountry, countryId }) => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editCityId, setEditCityId] = useState(null);

    const onEdit = (id) => {
        setEditCityId(id);
    };

    const modalToggle = () => {
        setModalOpen(((prevState) => !prevState));
    };

    const fetchCities = useCallback((id) => {
        getCitiesOfCountry(id)
            .then((data) => {
                setCities(data);
                setLoading(false);
            });
    }, [getCitiesOfCountry]);

    useEffect(() => {
        fetchCities(countryId);
    }, [fetchCities, countryId]);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h4>Cities</h4>
            <ul className="list-group">
                <AddCity onCityAdd={() => fetchCities(countryId)} countryId={countryId} />
                {cities.map((item) => (
                    <CitiesListItem
                        onCityDelete={() => fetchCities(countryId)}
                        key={item.id}
                        modalToggle={modalToggle}
                        onEdit={onEdit}
                        {...item}
                    />
                ))}
            </ul>
            <ModalWindow
                editCityId={editCityId}
                open={modalOpen}
                toggle={modalToggle}
                onCityUpdate={() => fetchCities(countryId)}
            />
        </div>
    );
};

const mapMethodsToProps = (countriesService) => ({
    getCitiesOfCountry: countriesService.getCitiesOfCountry,
});

export default withCountriesService(mapMethodsToProps)(CitiesList);
