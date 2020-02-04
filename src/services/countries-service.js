export default class CountriesService {
    _apiBase = ` http://localhost:3000`;

    getResource = async (url, method, body) => {
        const response = await fetch(`${this._apiBase}${url}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Could not fetch ${url},`
                + `received ${response.status}`);
        }

        return await response.json();
    };

    getCountries = async () => await this.getResource("/countries", "GET");

    getCitiesOfCountry = async (id) => await this.getResource(`/cities?country_id=${id}`, "GET");

    getCityById = async (id) => await this.getResource(`/cities/${id}`, "GET");

    updateCityById = async ({
        // eslint-disable-next-line camelcase
        id, title, desc, country_id,
    }) => await this.getResource(
        `/cities/${id}`,
        "PUT",
        {
            title,
            desc,
            country_id,
        },
    );

    addCity = async (title, desc, countryId) => await this.getResource(
        "/cities",
        "POST",
        {
            title,
            desc,
            country_id: countryId,
        },
    );

    deleteCity = async (id) => await this.getResource(`/cities/${id}`, "DELETE");
}
