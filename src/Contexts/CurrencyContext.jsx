import { createContext, useState } from "react";

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

export default CurrencyProvider;
