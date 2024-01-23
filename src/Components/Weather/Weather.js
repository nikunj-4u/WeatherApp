import React, { useEffect ,useState} from 'react'
import './style.css';
import Structure from './Structure';
const Weather = () => {
    const[searchValue,setSearchValue]=useState('delhi');
    const[tempInfo,setTempInfo]=useState({});

const getWeatherInfo=async ()=>{
try{
 let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=1752d4ef45cfe6d58bc67889fbeedc2c`;
 const res= await fetch(url);
 const data=await res.json();
const{temp,humidity,pressure}=data.main;
const {main:weatherKaisaHai}=data.weather[0];//just changed name to weatherKaisaHai for simplicity
const {name}=data;
const {speed}=data.wind;
const{country,sunset}=data.sys;
const myNewWeatherInfo={
    temp,
    humidity,
    pressure,
    weatherKaisaHai,
    name,
    speed,
    country,
    sunset
}
setTempInfo(myNewWeatherInfo);
}catch(err){
    console.log(err);
}
    };

    useEffect(()=>{
getWeatherInfo();
    },[])

    
  return (
    <>
    <div className='wrap'>
        <div className='search'>
        <input type="search" placeholder='search...' autoFocus id="search" className='searchTerm' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        <button className='searchButton' type="button" onClick={getWeatherInfo}>
            Search 
            </button>
        </div>
    </div>
   <Structure tempInfo={tempInfo}/>
    </>
  )
}

export default Weather
