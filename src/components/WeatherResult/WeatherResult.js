import React from 'react';

import Classes from './WeatherResult.css';

const WeatherResult = props => {
    return (
        <div className={Classes.Card}>
            <h2>{props.city}</h2>
            <h3>{props.weather}<span>{props.pressure}hPa <span className={Classes.Dot}>• </span>humidity {props.humidity}%</span></h3>
            <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon'/>
            <h1>{props.temperature}</h1>
        </div>
    )
}

export default WeatherResult;