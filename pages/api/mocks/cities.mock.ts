import { City } from "@models/city.type";

export const CitiesMock = (): City[] => [
    {
        code: '1',
        label: 'Bogotá',
        latitude: '4.74',
        longitude: '-74.09'
    },
    {
        code: '2',
        label: 'Caracas',
        latitude: '10.49',
        longitude: '-66.88'
    },
    {
        code: '3',
        label: 'Madrid',
        latitude: '40.42',
        longitude: '-3.70'
    },
    {
        code: '4',
        label: 'Moscu',
        latitude: '45.90',
        longitude: '27.93'
    },
    {
        code: '5',
        label: 'Toronto',
        latitude: '43.70',
        longitude: '-79.42'
    }
]