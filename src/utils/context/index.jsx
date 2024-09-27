import {createContext} from "react";
import {useFetch} from "../hooks/index.jsx";


export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const url = __DEV_MODE__ === "true" ? "../../../mock/data.js" : `/api/logements.json`;
    const {data, isLoading, error} = useFetch(url);

    return (
        <DataContext.Provider value={{ data, isLoading, error }}>
            {children}
        </DataContext.Provider>
    )
}