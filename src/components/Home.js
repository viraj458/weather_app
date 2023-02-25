import React from 'react'

const Home = ({data, more}) => {
  return (
    <div className='container'>
        <div className='city'>
        {data.city ? <h1>{data.city.name}</h1> : null}
        </div>
        <div className='today'>
        {data.list ? <><h1>{data.list[0].main.temp.toFixed()}°C</h1><p>{data.list[0].dt_txt}</p></> : null}
        </div>
        <div className='3days'>
          <div className='day2'>
          {data.list ? <><h1>{data.list[8].main.temp.toFixed()}°C</h1><p>{data.list[8].dt_txt}</p></> : null}
          </div>
          <div className='day3'>
          {data.list ? <><h1>{data.list[16].main.temp.toFixed()}°C</h1><p>{data.list[16].dt_txt}</p></> : null}
          </div>
          <div className='day4'>
          {data.list ? <><h1>{data.list[24].main.temp.toFixed()}°C</h1><p>{data.list[24].dt_txt}</p></> : null}
          </div>
          <button onClick={more}>More</button>
        </div>  
      </div>
  )
}

export default Home