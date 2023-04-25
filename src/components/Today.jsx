import React from 'react'

import '../App.css'

const Today = ({data}) => {

  let hours =  Object.keys(data).length !== 0 ? data.forecast.forecastday[0].hour: 0
  /* console.log(data.forecast.forecastday[0].hour,"::data in today component") */
  return (
   <>
   {
    Object.keys(data).length !== 0
    ? <div className='today-container'>
      {
        hours.map(hour=><section key={hour.time}>
        <p>{hour.time.slice(11)}</p>
        <img src={hour.condition.icon} alt={hour.condition.text}/>
        <p>{hour.temp_c}<sup>o</sup></p>
        </section>)
      }
    </div>
    :'Loading...'

   }
   </>
  )
}

export default Today