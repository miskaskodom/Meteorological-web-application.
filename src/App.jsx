import React,{useState,useEffect} from "react"
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Content from './components/Content.jsx'
import axios from "axios"


function App() {
  const [cords,setCords]=useState({lon:0,lat:0});
  const [data,setData] =useState({});
  const [finnal,setFinnal] =useState([]);
  const [location,setLocation]=useState('');
  const [database,setDataBase]=useState([]);
 
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ffac7de82e62e32e7ba96eeeec7d0bcd`;


 
 const serchLocation = (event) =>{
  if (event.key ==='Enter'){
    axios.get(url).then((response) => {
    setData(response.data)
   setDataBase((prev) => [...prev, data.name])

   const countItems = {};
   for (const item of database) {
    // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }
  const result = Object.keys(countItems).filter((item) => countItems[item] = 1);
  setFinnal(result);
  console.log(finnal);


   
  
    console.log([...database])
  })}}

  useEffect(() => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=9eecc962315d7d019a25cb291a4e5b3a`
    navigator.geolocation.getCurrentPosition(function(position) {
      setCords(cords.lat=position.coords.latitude);
      setCords(cords.lon=position.coords.longitude);
    }, function(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log('user denied the request for Geolocation.');
          break;
          case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
          case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
          case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
    })
    
  axios.get(currentUrl).then((response) => {
    setData(response.data)
  })},[])
    

  return (
    <>
    <Header/>
    <Navigation serchLocation={serchLocation} location={location} setLocation={setLocation} finnal={finnal}/>
    <Content data={data}/>

    </>
  )
}

export default App
