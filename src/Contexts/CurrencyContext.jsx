import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
    const currencyText = useState("USD")[0];
    const currencySymbol = useState("$")[0];

    return (
        <CurrencyContext.Provider value={{ currencySymbol, currencyText }}>
            {children}
        </CurrencyContext.Provider>
    );
};

CurrencyProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CurrencyProvider;
