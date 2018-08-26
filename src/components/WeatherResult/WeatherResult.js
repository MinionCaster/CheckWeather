import React from 'react';

import Classes from './WeatherResult.css';
import Aux from '../../hoc/Aux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faFeatherAlt)

const WeatherResult = props => {
    return (
        <Aux>
            <div className={Classes.Card}>
                <h2>{props.city}</h2>
                <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon'/>
                <h3>{props.weather}<span>{props.pressure}hPa <span className={Classes.Dot}>• </span>humidity {props.humidity}%</span></h3>
                <h1>{props.temperature}°</h1>
                <h3 className={Classes.MarginSmall}>{props.description}</h3>
                <h3>{props.wind}mph<span><FontAwesomeIcon icon="feather-alt" /></span></h3>
                <h3>Weather time: {props.date}</h3>
            </div>
        </Aux>
    )
}

export default WeatherResult;