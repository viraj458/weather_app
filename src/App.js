import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import WeekCard from './components/WeekCard';

function App() {

  const [data, setData] = useState({})
  const [shHome, setShHome] = useState(true)
  const [shCard, setShCard] = useState(false)
 
  useEffect(()=>{
    const fetchData = async() => {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=6.927079&lon=79.861244&units=metric&appid=f0fe2f7bb81e52b365adc3d4c1738af7`)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setData(data)
      })
      .catch(err=>console.error(err))
    }
    fetchData()
  },[])



  // more button Functionality
  const more = ()=>{
    setShCard(true)
    setShHome(false)
    }
 
  // back button Functionality
  const back = ()=>{
    setShCard(false)
    setShHome(true)
  }



  return (
    <div className="App">
      
      {/* Search component */}
      <Search setData={setData}/>

      {/* Home component */}
      {shHome &&
      <>
        <Home 
        data={data}
        more={more}
        />
      </>}


      {/* WeekCard component */}
      { shCard &&
      <>
        <WeekCard 
        data={data} 
        back={back}
        /> 
      </>}
      
    </div>
  );
}

export default App;
