import React, { createContext, useContext } from 'react'
import App from './App';

const AppContext = createContext(null);

function AppProvider({ children }) {
  
    const valueContext = {

    }
  
    return (
    <AppContext.Provider value={valueContext}>
        {children}
    </AppContext.Provider>
  )
}

const useGlobalHook = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalHook};