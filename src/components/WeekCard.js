import React from 'react'

const days = [0,8,16,24,32]

const WeekCard = ({data, back}) => {
  return (

    // shows 5 days temp
    <div className='card'>
      <div className='a'>
        {days.map((day) => (
          <div className='week' key={day}>
            {data.list ? (
              <>
                <h1>{data.list[day].main.temp.toFixed()}°C</h1>
                <p>{data.list[day].dt_txt}</p>
              </>
            ) : null}
            </div>
        ))}
      </div>
      
      <button onClick={back}>Back</button>
        
    </div>
  )
}

export default WeekCard