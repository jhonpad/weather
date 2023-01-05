import { Daily, Units } from "@models/forecast.type"
import { WEATHER_CODE } from '@site-settings/site-weathercode'
import { stringToDate } from "utilities/convertDate"

type Props = {
    daily: Daily
    units: Units
}
export const CardDaily = ({ daily, units }: Props) => {
    return (
        <div className="card  text-bg-dark h-100">
            <div className="card-header">
                <p>{stringToDate(daily.time)}</p>
                <h5>{WEATHER_CODE[daily.weathercode as keyof typeof WEATHER_CODE]}</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        Temperatura
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        min.
                        <div className="d-flex flex-wrap justify-content-center">

                            <h2>{daily.temperatureMin}</h2>
                            <h5>{units.temperatureMin}</h5>
                        </div>
                    </div>
                    <div className="col-6">
                        max.
                        <div className="d-flex flex-wrap justify-content-center">

                            <h2>{daily.temperatureMax}</h2>
                            <h5>{units.temperatureMax}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-6">
                        Ráfagas de viento
                        <h5>{`${daily.windgustsMax} ${units.windgustsMax}`}</h5>
                    </div>
                    <div className="col-6">
                        Velocidad del viento
                        <h5>{`${daily.windspeedMax} ${units.windspeedMax}`}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}