import React, { useState } from 'react'

const Search = ({setData}) => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const handleSearch = () => {

        const fetchLocationData = async() => {
          await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=f0fe2f7bb81e52b365adc3d4c1738af7`)
          .then(res=>{
            if(!res.ok) throw Error(res.statusText)
            return res.json()
          })
          .then(data=>{
            setData(data)
          })
          .catch(err=>console.error(err))
        }
        fetchLocationData()
    
        setLatitude('')
        setLongitude('')
      }

      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch()
        }
      }
  return (
    <div>
        <div className="search" onKeyPress={handleKeyPress}>
            <input
            value={latitude}
            onChange={event => setLatitude(event.target.value)}
            placeholder='Enter Latitude'
            type="number" />

            <input
            value={longitude}
            onChange={event => setLongitude(event.target.value)}
            placeholder='Enter Longitude'
            type="number" />
            
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Search