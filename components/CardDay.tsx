import { City } from "@models/city.type"
import { Forecast } from "@models/forecast.type"
import { WEATHER_CODE } from "@site-settings/site-weathercode"
import { stringToDate } from "utilities/convertDate"

type Props = {
    forecast: Forecast,
    city: City
}

export const CardDay = ({ forecast, city }: Props) => {
    return (

        <div className="card text-bg-dark mb-2">
            <div className="card-header">
                <h1>{city.label}</h1>
                <p>{stringToDate(forecast.weather.time)}</p>
                <h4>{ WEATHER_CODE[forecast.weather.weathercode as keyof typeof WEATHER_CODE]}</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <div>
                            <p>Temperatura</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <h1 className="m-2">
                                {forecast.weather.temperature}
                            </h1>
                            <h4>
                                {forecast.units.temperatureMax}
                            </h4>
                        </div>

                    </div>
                    <div className="col-4">
                        <div>
                            <p>Dirección del viento</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <h1 className="m-2">
                                {forecast.weather.winddirection}
                            </h1>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <p>Velocidad del viento</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <h1 className="m-2">
                                {forecast.weather.windspeed} 
                            </h1>
                            <h4>
                                {forecast.units.windspeedMax}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}