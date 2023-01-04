import { useFetch } from '@hooks/useFetch'
import { ForecastContext } from 'contexts/forecast.context'
import { CardDaily } from 'components/CardDaily'
import { forecastAdapter } from '@adapters/forecast.adapter'
import { useContext, useEffect, useState } from 'react'
import { ForecastResponse, Forecast } from '@models/forecast.type'
import { stringToDate } from 'utilities/convertDate';
import { City } from '@models/city.type'
export const InfoWeather = () => {
    const { data, fetchData, loading } = useFetch()
    const { city, unitTemperature } = useContext(ForecastContext)
    const [forecast, setForecast] = useState<Forecast | null>(null)

    useEffect(() => {
        console.log('Cambio ciudad ->', city)
        const options: RequestInit = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        console.log('city -> ', city)
        const newCity = { ...city }
        const url = `/api/forecast?latitude=${newCity.latitude}&longitude=${newCity.longitude}&unitTemperature=${unitTemperature}`
        console.log('url -> ', url, ' - ', newCity)

        fetchData(url, options)
    }, [city, unitTemperature])

    useEffect(() => {
        if (data) {
            const forecast = forecastAdapter(data as ForecastResponse)
            // console.log('Data response -> ', data)
            setForecast(forecast)
        }
    }, [data])


    return (
        <div>
            {
                loading ?
                    (
                        <div className="row justify-content-md-center  w-100">
                            <div className="col col-6" style={{height:'100vh'}}>
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <>
                        {
                            forecast && forecast.weather && (
                                <div className="card text-bg-dark mb-2">
                                    <div className="card-header">
                                        <p>{city.label}</p>
                                        <p>Today</p>
                                        <p>{stringToDate(forecast.weather.time)}</p>
                                    </div>
                                    <div className="card-body">

                                        <table className="table table-dark table-borderless">
                                            <thead>
                                                <tr>
                                                    <td scope="col">Temperature</td>
                                                    <td scope="col">windgusts Max</td>
                                                    <td scope="col">windspeed Max</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{`${forecast.weather.temperature} ${forecast.units.temperatureMax}`}</td>
                                                    <td>{`${forecast.weather.temperature} ${forecast.units.windgustsMax}`}</td>
                                                    <td>{`${forecast.weather.winddirection} ${forecast.units.windspeedMax}`}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            )
                        }

                        {
                            forecast && forecast.daily?.map((data, key) => {
                                return (
                                    <CardDaily daily={data} units={forecast.units} key={key} />
                                )
                            })
                        }
                    </>
            }
        </div>
    )
}