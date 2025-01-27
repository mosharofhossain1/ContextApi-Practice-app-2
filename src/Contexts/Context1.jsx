/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const Context1 = createContext();

export const Context1Provider = ({ children }) => {

    const [x, setX] = useState('All Gerbase Clear');
    return (
        <Context1.Provider value={[x, setX]}>
            {children}
        </Context1.Provider>
    )
}