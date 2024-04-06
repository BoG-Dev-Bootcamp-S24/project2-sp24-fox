"use client";

import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export default function AppWrapper({ children }) {
  
    let [fullName, setFullName] = useState('Jong Lam')
    let [id, setId] = useState("");

    return (
        <AppContext.Provider value={{
            fullName,
            setFullName,
            id,
            setId
        }}>
            {children}
        </AppContext.Provider>

    )
}

export function useAppContext() {
    return useContext(AppContext);
}
