import {createContext, useState, useContext, useEffect} from "react"

const SavedLocationContext = createContext()

export const useSavedLocationContext = () => useContext(SavedLocationContext)

export const SavedLocationProvider = ({children}) => {

    const [savedLocs, setSavedLocs] = useState([])

    useEffect(() => {
        const savedLocs = localStorage.getItem("savedLocs")

        if(savedLocs) setSavedLocs(JSON.parse(savedLocs))
    }, [])

    useEffect(() => {
        localStorage.setItem("savedLocs", JSON.stringify(savedLocs))
    }, [savedLocs])

    const addToSavedLocs = (location) => {
        setSavedLocs(prev => [...prev, location])
    }

    const removeFromSavedLocs = (locationId) => {
        setSavedLocs(prev => prev.filter(location => location.id !== locationId))
    }

    const isSavedLoc = (locationId) => {
        return savedLocs.some(location => location.id === locationId)
    }

    const value = {
        savedLocs,
        addToSavedLocs,
        removeFromSavedLocs,
        isSavedLoc
    }
        
    return <SavedLocationContext.Provider>
        {children}
    </SavedLocationContext.Provider>
}