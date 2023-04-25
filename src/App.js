import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, NavLink, Outlet, RouterProvider } from 'react-router-dom'
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
  const [isWeek, setIsWeek ] = useState(false)

  const { data, loading, error } = useFetch(location)

  const handleChangeCountry = (e) => {
    console.log(e.target.value)
    setLocation(e.target.value)

  }

  console.log("data: ", data)
  console.log("error: ", error)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Today data={data}/>} />
        <Route path='/week' element={<Week/>} />
      </Route>
    )
  )
  return (
    <div className="App">
      <div className='app-container'>
        <header className="App-header">
        <p>H!!om!!e</p>
          {Object.keys(data).length !== 0
            &&
            <section className='region-section'>
            
              {data.current.condition.icon && <>
              <p>{data.location.name},</p>
              <p>{data.location.country}</p>
              <p className='temp'>{data.current.temp_c}<sup>o</sup></p>

              <img src={data.current.condition.icon} /> 
              </> }
             {/*  <div>
                <p>Last updated:</p>
                <p>{data.current.last_updated}</p></div> */}
            </section>

          }

        </header>
        <Location handleChangeCountry={handleChangeCountry} data={data} />
        <Cards data={data}/>
        <RouterProvider router={router} />
        <p>last updated : {data.current.last_updated}</p>
     
      </div>

    </div>
  );
}

export default App;
