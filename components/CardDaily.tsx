import { Daily, Units } from "@models/forecast.type"
import { WEATHER_CODE } from '@site-settings/site-weathercode'
import { stringToDate } from "utilities/convertDate"

type Props = {
    daily: Daily
    units: Units
}
export const CardDaily = ({ daily, units }: Props) => {
    return (
        <div className="card  text-bg-dark mb-2">
            <div className="card-header">{`${daily.weathercode} - ${ WEATHER_CODE[daily.weathercode as keyof typeof WEATHER_CODE]}`}</div>
            <div className="card-body">
                <table className="table table-dark table-sm">
                    <thead>
                        <tr>
                            <td rowSpan={3} scope="col"></td>
                            <td scope="col" colSpan={2}>Temperature</td>
                            <td scope="col">windgusts Max</td>
                            <td scope="col">windspeed Max</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>{stringToDate(daily.time)}</td>
                            <td>Min</td>
                            <td>Max</td>
                            <td rowSpan={2}>{`${daily.windgustsMax} ${units.windgustsMax}`}</td>
                            <td rowSpan={2}>{`${daily.windspeedMax} ${units.windspeedMax}`}</td>
                        </tr>
                        <tr>
                            <td>{`${daily.temperatureMin} ${units.temperatureMin}`}</td>
                            <td>{`${daily.temperatureMax} ${units.temperatureMax}`}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}