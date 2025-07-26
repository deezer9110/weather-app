import {createContext, useState, useContext, useEffect} from "react"

const WeatherContext = createContext()

export const useMovieContext = () => useContext()

export const MovieProvider = ({children}) => {
        
    return <WeatherContext.Provider>
        {children}
    </WeatherContext.Provider>
}