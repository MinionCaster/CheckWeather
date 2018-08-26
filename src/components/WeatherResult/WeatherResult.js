import React from 'react';

import Classes from './WeatherResult.css';
import Aux from '../../hoc/Aux';

const WeatherResult = props => {
    return (
        <Aux>
            <div className={Classes.Card}>
                <h2>{props.city}</h2>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon'/>
                <h3>{props.weather}<span>{props.pressure}hPa <span className={Classes.Dot}>• </span>humidity {props.humidity}%</span></h3>
                <h1>{props.temperature}°</h1>
                <h3 className={Classes.MarginSmall}>{props.description}</h3>
                <h3 className={Classes.Marginsmall}>{props.wind}mph</h3>
                <h3>Weather time: {props.date}</h3>
            </div>
        </Aux>
    )
}

export default WeatherResult;