import React from 'react'

const WeekCard = ({data, back}) => {
  return (
    <div className='card'>
        <div className='today'>
        {data.list ? <><h1>{data.list[0].main.temp.toFixed()}°C</h1><p>{data.list[0].dt_txt}</p></> : null}
        </div>
        <div className='day2'>
        {data.list ? <><h1>{data.list[8].main.temp.toFixed()}°C</h1><p>{data.list[8].dt_txt}</p></> : null}
        </div>
        <div className='day3'>
        {data.list ? <><h1>{data.list[16].main.temp.toFixed()}°C</h1><p>{data.list[16].dt_txt}</p></> : null}
        </div>
        <div className='day4'>
        {data.list ? <><h1>{data.list[24].main.temp.toFixed()}°C</h1><p>{data.list[24].dt_txt}</p></> : null}
        </div>
        <div className='day5'>
        {data.list ? <><h1>{data.list[32].main.temp.toFixed()}°C</h1><p>{data.list[32].dt_txt}</p></> : null}
        </div>
        <button onClick={back}>Back</button>
    </div>
  )
}

export default WeekCard