import styled from 'styled-components'
const WeatherAppWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 867px){
        height: auto;
    }
`
const WeatherAppSearch = styled.div`
        width: 60%;
    input{
        border: 2px solid var(--blue-color);
        outline: 0;
        width: 100%;
        height: 40px;
        padding: 4px;
    }
`
const WeatherApp = styled.div`
    background-color: var(--blue-color);
    color: var(--red-color);
    width: 60%;
    margin: 15px 0;
    @media (max-width: 867px){
        width: 100%;
    }
`
const WeatherAppData = styled.div`
    display: flex;
    height: 300px;
    @media (max-width: 867px){
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`
const WeatherAppDataSection = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & div{
        background-color: var(--red-color);
        color: var(--blue-color);
        padding: 10px;
        width: 220px;
        @media (max-width: 867px){
            margin: 15px;
        }
    }
`
const WeatherAppDataMiddle = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & img{
        width: 150px;
    }
`
const WeatherAppDetails = styled.div`
    background-color: var(--red-color);
    color: var(--blue-color);
    display: flex;
    padding: 10px;
`
const WeatherAppDetailsPlace = styled.div`
    width: 50%;
`
const WeatherAppDetailsDate = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`
function WeatherAppComponent({api}) {
    return (
        <WeatherAppWrapper>
            <WeatherAppSearch>
                <input type='option'/>
            </WeatherAppSearch>
            <WeatherApp>
                <WeatherAppData>
                    <WeatherAppDataSection>
                        <div>wind speed : {api.current.wind_kph} kph</div> 
                        <div>wind degree : {api.current.wind_degree}</div> 
                        <div>wind direction : {api.current.wind_dir}</div> 
                        <div>wind gust : {api.current.gust_kph}kph</div>
                    </WeatherAppDataSection>
                    <WeatherAppDataMiddle>
                        <div> {api.current.temp_c} <sup>o</sup>C / {api.current.temp_f} <sup>o</sup>F</div> 
                        <img src={api.current.condition.icon}/>
                        <div>{api.current.condition.text}</div>
                    </WeatherAppDataMiddle>
                    <WeatherAppDataSection>
                        <div>humidity : {api.current.humidity} %</div> 
                        <div>pressure : {api.current.pressure_mb}</div> 
                        <div>cloud : {api.current.cloud}</div>
                        <div>uv : {api.current.uv}</div>
                    </WeatherAppDataSection>
                </WeatherAppData>
                <WeatherAppDetails>
                    <WeatherAppDetailsPlace>
                        <h2>{api.location.country} / {api.location.name}</h2>
                        <h4>Latitude  : {api.location.lat} / Longitude  : {api.location.lon}</h4>
                    </WeatherAppDetailsPlace>
                    <WeatherAppDetailsDate>
                        <h4>{api.location.localtime}</h4>
                    </WeatherAppDetailsDate>
                </WeatherAppDetails>
            </WeatherApp>
        </WeatherAppWrapper>
    )
}
export default WeatherAppComponent