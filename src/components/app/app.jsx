import React, { useState } from "react";
import AppHeader from "../app-header";
import MainContentWrapper from "../main-content-wrapper/main-content-wrapper";

const App = () => {
    const [countryId, setCountryId] = useState(1);
    const onCountrySelect = (id) => {
        setCountryId(id);
    };

    return (
        <div className="app">
            <AppHeader />
            <MainContentWrapper
                countryId={countryId}
                onCountrySelect={onCountrySelect}
            />
        </div>
    );
};

export default App;
