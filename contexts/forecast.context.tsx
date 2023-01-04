import { City } from '@models/city.type';
import { FC, useReducer, createContext } from 'react'
import { Value } from 'sass';

type contextType = {
    city: City
    unitTemperature: 'celsius' | 'fahrenheit'
    setStateForecast?: (value: { type: any; payload: any }) => void
}

export const initialState: contextType = {
    city: {
        code: '1',
        label: 'Bogotá',
        latitude: '4.74',
        longitude: '-74.09'
    },
    unitTemperature: 'celsius'
}

export const ForecastContext = createContext<contextType>(initialState);

export const ForecastReducer = (state: any, action: { type: any; payload: any }) => {
    switch (action.type) {
        case 'CITY':
            return {
                ...state,
                city: { ...action.payload },
            }
        case 'UNITTEMPERATURE':
            return {
                ...state,
                unitTemperature: action.payload
            }
        default:
            return state
    }
}

type Props = {
    children: React.ReactNode
}

export const ForecastProvider = ({ children }: Props) => {
    const [stateForecast, setStateForecast] = useReducer(ForecastReducer, initialState)

    return (
        <ForecastContext.Provider
            value={{
                city: stateForecast.city,
                unitTemperature: stateForecast.unitTemperature,
                setStateForecast
            }}
        >
            {children}
        </ForecastContext.Provider>
    )
}