import { useFetch } from '@hooks/useFetch'
import { ForecastContext } from 'contexts/forecast.context'
import { CardDaily } from 'components/CardDaily'
import { forecastAdapter } from '@adapters/forecast.adapter'
import { useContext, useEffect, useState } from 'react'
import { ForecastResponse, Forecast } from '@models/forecast.type'
import { stringToDate } from 'utilities/convertDate';
import { Spinner } from './Spinner'
import { CardDay } from './CardDay'

export const InfoWeather = () => {
    const { data, fetchData, loading } = useFetch()
    const { city, unitTemperature } = useContext(ForecastContext)
    const [forecast, setForecast] = useState<Forecast | null>(null)

    useEffect(() => {
        const options: RequestInit = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const newCity = { ...city }
        const url = `/api/forecast?latitude=${newCity.latitude}&longitude=${newCity.longitude}&unitTemperature=${unitTemperature}`

        fetchData(url, options)
    }, [city, unitTemperature])

    useEffect(() => {
        if (data) {
            const forecast = forecastAdapter(data as ForecastResponse)
            setForecast(forecast)
        }
    }, [data])


    return (
        <div>
            {
                loading ?
                    (
                        <div className="row d-flex  vh-100">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <Spinner />
                            </div>
                        </div>
                    )
                    :
                    <>
                        {
                            forecast && (<CardDay forecast={forecast} city={city}/>)
                        }

                        <div className="row d-felx justify-content-center g-2">
                        {
                            forecast && forecast.daily?.map((data, key) => {
                                return (
                                    <div className='col-sm-6 col-md-4' key={key}>

                                        <CardDaily daily={data} units={forecast.units}  />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </>
            }
        </div>
    )
}