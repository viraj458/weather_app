import React from 'react'

const days = [8,16,24];

const Home = ({data, more}) => {
  return (
    <div className='container'>
      {/* shows name of the searched city or default Colombo */}
      <div className='city'>
      {data.city ? <h1>{data.city.name}</h1> : null}
      </div>

      {/* shows current day temp in celcius */}
      <div className='today'>
      {data.list ? <><h1>{data.list[0].main.temp.toFixed()}°C</h1><p>{data.list[0].dt_txt}</p></> : null}
      </div>
    
      {/* shows next 3 days temp in celcius */}
      <div className='3days'>
        {days.map((day) => (
          <div className='day2' key={day}>
            {data.list ? (
              <>
                <h1>{data.list[day].main.temp.toFixed()}°C</h1>
                <p>{data.list[day].dt_txt}</p>
              </>
            ) : null}
          </div>
        ))}
      </div>

      <button onClick={more}>More</button>

    </div>
  )
}

export default Home