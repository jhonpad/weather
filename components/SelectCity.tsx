import { useState, useContext } from 'react';
import { City } from '@models/city.type';
import { ForecastContext } from 'contexts/forecast.context'


type Props = {
    cities: Array<City>
}

export const SelectCity = ({ cities }: Props) => {
    const [city, setCity] = useState(cities[0].code)
    const { setStateForecast } = useContext(ForecastContext)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = event.target.value
        setCity(cityId);
        console.log('city id ->',cityId)

        const citySelect: City | undefined = cities.find(item => item.code === cityId )
        console.log('citySelect -> ', citySelect)

        if (setStateForecast && citySelect) {
            setStateForecast({
              type: 'CITY',
              payload: {...citySelect}
            })
          }
    }

    return (
        <div>
            <select className="form-select bg-dark text-white-50" aria-label="Default select example" onChange={handleChange}>
                {
                    cities?.map((item, key) => {
                        return <option value={item.code} key={key}>{item.label}</option>
                    })
                }
            </select>
        </div>
    )
}