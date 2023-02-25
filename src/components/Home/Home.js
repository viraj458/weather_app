import React from 'react'
import './Home.css'

const days = [8,16,24];

const Home = ({data, more}) => {
  return (
    <div className='cc'>
      {/* shows name of the searched city or default Colombo */}
      <div className='city'>
      {data.city ? <h2>{data.city.name}</h2> : null}
      </div>

      {/* shows current day temp in celcius */}
      <div className='today'>
      {data.list ? <><h1>{data.list[0].main.temp.toFixed()}°C</h1><p>Today</p></> : null}
      </div>
    
      {/* shows next 3 days temp in celcius */}
      <div className='days3'>
        
        {days.map((day) => (
          <div className='day' key={day}>
            {data.list ? (
              <>
                <h1>{data.list[day].main.temp.toFixed()}°C</h1>
                <p>{data.list[day].dt_txt.split(' ')[0]}</p>
              </>
            ) : null}
          </div>
        ))}
      </div>

      <div className='btn'>
        <button onClick={more}>More</button>
      </div>

      

    </div>
  )
}

export default Home