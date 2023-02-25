import React, { useState } from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa";

const Search = ({setData}) => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const handleSearch = () => {

        const fetchLocationData = async() => {
          await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
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
            className='s1'
            value={latitude}
            onChange={event => setLatitude(event.target.value)}
            placeholder='Latitude'
            type="number" />

            <input
            className='s2'
            value={longitude}
            onChange={event => setLongitude(event.target.value)}
            placeholder='Longitude'
            type="number" />
            
            <FaSearch className='shicon' onClick={handleSearch}/>
        </div>
    </div>
  )
}

export default Search