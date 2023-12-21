import { useEffect, useState } from 'react'
import WeatherAppComponent from '../component/WeatherApp'
function HomePage() {
    const [api, setApi] = useState()
    useEffect(() => {
        apiData()
    }, [])
    const apiData = async ()=>{
        await fetch("http://api.weatherapi.com/v1/current.json?key=a9ccfbd01774475a811235751232012&q=cairo&aqi=no")
        .then(res => res.json()).then(res => setApi(res)).catch(err => console.log(err))
    }
    return (
        <>
            {api ?  <WeatherAppComponent api={api}/>: "no data"}
        </>
    )
}
export default HomePage