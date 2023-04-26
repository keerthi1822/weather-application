import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, NavLink, Outlet, RouterProvider } from 'react-router-dom'

import Footer from './components/Contact/Footer'
import Today from './components/Today';
import Week from './components/Week'
import Location from './components/Location'
import Cards from './components/Cards'
import useFetch from './Hooks/useFetch'

import './App.css';

const Root = () => {
  return <div>
    <nav className='navigation'>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active navItem" : "navItem"
        }
        to="/"> Hours</NavLink>

      <NavLink to="/week"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active navItem" : "navItem"
        }
      >Week</NavLink>

    </nav>
    <div className='outlet'><Outlet /></div>
  </div>
}


function App() {
  const [location, setLocation] = useState('Copenhagen');
  const [days, setDays] = useState(7);

  const { data, loading, error } = useFetch(location, days)

  const handleChangeCountry = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)

  }

  const handleDays = (e) => {
    console.log(e.target.value)
    setDays(e.target.value)
  }

  console.log("data: ", data)
  console.log("error: ", error)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Today data={data} />} />
        <Route path='/week' element={<Week data={data} />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <div className='app-container'>
        <header className="App-header">
          {/* <p>H!!om!!e</p> */}

          {Object.keys(data).length !== 0
            &&
            <>
              <section className='region-section'>

                {data.current.condition.icon && <>

                  <section >
                    <img src={data.current.condition.icon} alt={data.current.condition.text} />
                  </section>

                  <section>
                    <p className='temp'>{data.current.temp_c}<sup>o</sup></p>
                    <p className='temp-text'>{data.current.condition.text}</p>
                  </section>
                </>
                }

              </section>

              <section>
                <p >{data.forecast.forecastday[0].date}</p>
                <p>{data.location.name},{data.location.country}</p>
              </section>

            </>




          }


        </header>

        <Location handleChangeCountry={handleChangeCountry} handleDays={handleDays} data={data} days={days} />
        <Cards data={data} />
        <RouterProvider router={router} />
        {(Object.keys(data).length !== 0) && <p>last updated : {data.current.last_updated}</p>}
        <Footer />

      </div>

    </div>
  );
}

export default App;
