interface CurrentWeather {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    time: string
}

interface DailyUnits {
    time: string,
    weathercode: string,
    temperature_2m_max: string,
    temperature_2m_min: string,
    windspeed_10m_max: string,
    windgusts_10m_max: string
}

export interface DailyResponse {
    time: [string],
    weathercode: [number],
    temperature_2m_max: [number],
    temperature_2m_min: [number],
    windspeed_10m_max: [number],
    windgusts_10m_max: [number]
}

export interface Weather {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number,
    time: string
}

export interface Units {
    time: string,
    weathercode: string,
    temperatureMax: string,
    temperatureMin: string,
    windspeedMax: string,
    windgustsMax: string
}

export interface Daily {
    time: string,
    weathercode: number,
    temperatureMax: number,
    temperatureMin: number,
    windspeedMax: number,
    windgustsMax: number
}

export interface Forecast {
    weather: Weather,
    units: Units,
    daily: Array<Daily>
}

export interface ForecastResponse {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    current_weather: CurrentWeather
    daily_units: DailyUnits,
    daily: DailyResponse
}