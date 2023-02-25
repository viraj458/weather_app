import React from 'react'
import './WeekCard.css'

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
                <p>{data.list[day].dt_txt.split(' ')[0]}</p>
              </>
            ) : null}
            </div>
        ))}
      </div>
      
      <div className='btn2'>
      <button onClick={back}>Back</button>
      </div>
      
        
    </div>
  )
}

export default WeekCard