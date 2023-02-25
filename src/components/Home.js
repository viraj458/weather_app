import React from 'react'

const num = [8,16,24];

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
          {num.map((n, index) => (
            <div className='day2' key={index}>
              {data.list ? (
                <>
                  <h1>{data.list[n-1].main.temp.toFixed()}°C</h1>
                  <p>{data.list[n-1].dt_txt}</p>
                </>
              ) : null}
              </div>
          ))}
          <button onClick={more}>More</button>

        </div>  
      </div>
  )
}

export default Home