
import React, { createContext, useContext, useEffect, useState } from 'react'

export function useAppContext() {
    return useContext(AppContext);
}
const AppContext = createContext();

export default function AppWrapper({ children }) {
    let [fullName, setFullName] = useState("")
    let [id, setId] = useState("");
    let [admin, setAdmin] = useState(false)
    const [ready, setReady] = useState(false)
    const [red, setRed] = useState(false)
    const [animals, setAnimals] = useState([])
    const [logs, setLogs] = useState([])
    const [newstuff, setNewStuff] = useState(false)
    // if (userinfo) {
    //     setFullName(userinfo.fullName)
    //     setId(userinfo.id);
    // } 
    
    useEffect(() => {
        
    async function getData() {
        
        try {
            const response = await fetch("http://localhost:3000/api/user/verify", {
            headers: {
                "Content-Type": "application/json"
            },

            credentials: "include"
            
        });

        const data = await response.text()
        if (data !== "Failure") {
            setFullName(JSON.parse(data).fullName)
            setId(JSON.parse(data).id)
            setAdmin(JSON.parse(data).adminstatus)
            setAnimals(JSON.parse(data).animals)
            setLogs(JSON.parse(data).logs)
            setReady(true)
        } else {
            setRed(true)
            setReady(true)
        }
        
        } catch (error) {
            console.error(error)
        } 
        
    }
    getData()
    
    }, [])


    return (
        <AppContext.Provider value={{
            fullName,
            id,
            ready,
            red,
            setReady,
            setRed,
            admin,
            animals,
            setLogs,
            logs,
            setNewStuff,
            newstuff
        }}>
            {children}
        </AppContext.Provider>

    )
}


