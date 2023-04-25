import React from 'react'
import '../App.css'


const Cards = ({ data }) => {

    console.log(Object.keys(data).length !== 0 ? data.forecast.forecastday[0].astro.sunrise : 0, "::data in cards component")
    return (<>
        {Object.keys(data).length !== 0 ? <ul className='cards'>


            <li className='card'>
                <p>Sunrise</p>
                <p>{data.forecast.forecastday[0].astro.sunrise}</p>
            </li>

            <li className='card'>
                <p>Sunset</p>
                <p>{data.forecast.forecastday[0].astro.sunset}</p>
            </li>

            <li className='card'>
                <p>Max Temp</p>
                <p>{data.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <p>Min Temp</p>
                <p>{data.forecast.forecastday[0].day.mintemp_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <p>Feels like</p>
                <p>{data.current.feelslike_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <p>Current Condition</p>
                <p>{data.current.condition.text}</p>
            </li>

        </ul> : 'Loading...'}
    </>)
}

export default Cards