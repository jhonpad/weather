
import { ForecastContext } from 'contexts/forecast.context';
import { useState, useContext } from 'react';

export const SelectUnitTemperature = () => {
    const [unitTemp, setUnitTemp] = useState('celsius')
    const { setStateForecast } = useContext(ForecastContext)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const unitTemperature = (event.target as HTMLInputElement).value
        setUnitTemp(unitTemperature);

        if (setStateForecast) {
            setStateForecast({
                type: 'UNITTEMPERATURE',
                payload: unitTemperature
            })
        }
    }

    return (
        <div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='celsius' onChange={handleChange} checked={unitTemp === 'celsius'} />
                <label className="form-check-label text-justify-left text-white-50" htmlFor="flexRadioDefault1">
                    °C - Celsius
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input text-white-50" type="radio" name="flexRadioDefault" value='fahrenheit' id="flexRadioDefault2" onChange={handleChange} checked={unitTemp === 'fahrenheit'} />
                <label className="form-check-label text-white-50" htmlFor="flexRadioDefault2">
                    °F - Fahrenheit
                </label>
            </div>
        </div>
    )
}