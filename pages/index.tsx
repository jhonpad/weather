import { Inter } from '@next/font/google'
import { Layout } from 'components/Layout'

import { SelectCity } from 'components/SelectCity'
import { SelectUnitTemperature } from 'components/SelectUnitTemperature'
import { CitiesMock } from '@api/mocks/cities.mock'
import { ForecastProvider } from 'contexts/forecast.context'
import { InfoWeather } from 'components/InfoWeather'

export default function Home() {

  return (
    <Layout metaTags={{ title: 'Weather is comming' }}>
      <ForecastProvider>
        <div className="container text-center">
          <div className="row justify-content-md-center">
            <div className=" col-sm-12 col-md-4 mb-3">
              <SelectCity cities={CitiesMock()} />
            </div>

            <div className=" col-sm-12 col-md-3 mb-3">
              <SelectUnitTemperature />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-12">
              <InfoWeather />
            </div>
          </div>
        </div>

      </ForecastProvider>
    </Layout>
  )
}
