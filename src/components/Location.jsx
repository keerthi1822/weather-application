import React from 'react'
import '../App.css'

const Location = ({ handleChangeCountry,handleDays, data,days }) => {


  const Countries = ['Copenhagen',
    "Delhi",
    'New Delhi',
    'Berlin',
    'Aarhus',
    'Aalborg',
    'Hyderabad',
    'Banglore',
    'Chennai',
    'Mumbai',
    'Hamburg',
    'Oslo',
    'Malmo',
    'Stockholm',
    'London',
    'Gothenburg',
    'Amstadam',
    'Rome',
    'Paris'
  ]

  return (
    <div className='location-Container'>

      <section className='location-section'>

       {/*  <p>{Object.keys(data).length !== 0 && data.forecast.forecastday[0].date}</p> */}
       {/*  <section> */}
        <p className='location-label' > {"What is the temperature in"}

          <select className='select-location' onChange={handleChangeCountry}>
            {Countries.map((country, i) => <option key={i} style={{ width: '30%' }} value={country}>{country}</option>)}
          </select>{"for the next "}
          <input type='number' onChange={handleDays} value={days}  min="1" max="10"/> days. (max:10days)
        </p>
        {/* </section> */}

      </section>


    </div>
  )
}

export default Location