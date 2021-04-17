import React, {useReducer, useContext, createContext} from 'react'

export const DataLayerContext = createContext();

export const DataLayer = ({reducer, initialState , children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayer = () => useContext(DataLayerContext);

  