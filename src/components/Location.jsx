import React, { useState, useEffect } from 'react'

const Location = ({ handleChangeCountry,data }) => {


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
    <div style={{ backgroundColor: '#85586F'}}>
      <section style={{display:'flex', justifyContent:'space-between',alignItems:'center',padding:'0px 15px'}}>
      <p>{Object.keys(data).length !== 0 && data.forecast.forecastday[0].date}</p>
        <p style={{ color: 'white', margin: 0 }}> {"Select Location"}
          <select style={{ margin: '10px' }} onChange={handleChangeCountry}>

            {Countries.map((country, i) => <option key={i} style={{ width: '30%' }} value={country}>{country}</option>)}

          </select></p>

      </section>

    </div>
  )
}

export default Location