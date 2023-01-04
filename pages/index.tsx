import { Inter } from '@next/font/google'
import { Layout } from 'components/Layout/Layout'

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
            <div className="col col-6 mb-3">
              <SelectCity cities={CitiesMock()} />
            </div>

          </div>
          <div className="row justify-content-md-center">

            <div className="col col-3 col-xs-12 mb-3">
              <SelectUnitTemperature />
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <InfoWeather />
            </div>
          </div>
        </div>

      </ForecastProvider>
    </Layout>
  )
}
