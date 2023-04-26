import React from 'react'
import '../App.css'


const Cards = ({ data }) => {

    /* console.log(Object.keys(data).length !== 0 ? data.forecast.forecastday[0].astro.sunrise : 0, "::data in cards component") */
    return (<>
        {Object.keys(data).length !== 0 ? <ul className='cards'>


            <li className='card'>
                <h5 className='card-heading'>Sunrise</h5>
                <p>{data.forecast.forecastday[0].astro.sunrise}</p>
            </li>

            <li className='card'>
                <h5 className='card-heading'>Sunset</h5>
                <p>{data.forecast.forecastday[0].astro.sunset}</p>
            </li>

            <li className='card'>
                <h5 className='card-heading'>Max Temp</h5>
                <p>{data.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <h5 className='card-heading'>Min Temp</h5>
                <p>{data.forecast.forecastday[0].day.mintemp_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <h5 className='card-heading'>Feels like</h5>
                <p>{data.current.feelslike_c}<sup>o</sup></p>
            </li>

            <li className='card'>
                <h5 className='card-heading'>Current Condition</h5>
                <p>{data.current.condition.text}</p>
            </li>

        </ul> : 'Loading...'}
    </>)
}

export default Cards