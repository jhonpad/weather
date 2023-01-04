import { ForecastResponse, Forecast, DailyResponse, Daily } from "@models/forecast.type";

export const forecastAdapter = (forecast: ForecastResponse): Forecast => ({
    weather: {
        temperature: forecast.current_weather.temperature,
        windspeed: forecast.current_weather.windspeed,
        winddirection: forecast.current_weather.winddirection,
        weathercode: forecast.current_weather.weathercode,
        time: forecast.current_weather.time
    },
    daily: buildDaily(forecast.daily),
    units: {
        temperatureMax: forecast.daily_units.temperature_2m_max,
        temperatureMin: forecast.daily_units.temperature_2m_min,
        time: forecast.daily_units.time,
        weathercode: forecast.daily_units.weathercode,
        windgustsMax: forecast.daily_units.windgusts_10m_max,
        windspeedMax: forecast.daily_units.windspeed_10m_max
    }
}
)


const buildDaily = (data: DailyResponse) => {
    const length = data.temperature_2m_max.length
    const result: Array<Daily> = []
    for (let index = 0; index < length; index++) {
        const newDaily: Daily = {
            temperatureMax: data.temperature_2m_max[index],
            temperatureMin: data.temperature_2m_min[index],
            time: data.time[index],
            weathercode: data.weathercode[index],
            windgustsMax: data.windgusts_10m_max[index],
            windspeedMax: data.temperature_2m_max[index]
        }
        
        result.push(newDaily)
    }

    return result

}