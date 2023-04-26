import React from 'react'

const Week = ({data}) => {

  let days =  Object.keys(data).length !== 0 ? data.forecast.forecastday: 0
  /* console.log(data.forecast.forecastday[0],"::data in Week component") */
  return (
   <>
   {
    Object.keys(data).length !== 0
    ? <div className='week-container'>
      {
        days.map(day=><section key={day.date}>
        <p>{day.date.slice(5).replace('-','/')}</p>
        <img src={day.day.condition.icon} alt={day.day.condition.text}/>
        <p>{day.day.avgtemp_c}<sup>o</sup></p>
        </section>)
      }
    </div>
    :'Loading...'

   }
   </>
  )
}

export default Week 