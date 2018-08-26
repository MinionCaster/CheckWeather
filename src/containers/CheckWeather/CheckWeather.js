import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import SearchBox from '../../components/SearchBox/SearchBox';
import WeatherResult from '../../components/WeatherResult/WeatherResult';

import Classes from './CheckWeather.css'

class CheckWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            weatherPrint: {
                city: '',
                country: '',
                temperature: '',
                humidity: '',
                pressure: '',
                weather: '',
                description: '',
                icon: '',
                wind: '',
                date: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({search: value}, function() {
            console.log(this.state.search);
        });
    }

    async getResults(event) {
        event.preventDefault();
        this.setState({loading: true})
        try {
            const res = await axios(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&q=${this.state.search}`);
            this.setState({
                loading: false,
                weatherPrint: {
                    city: res.data.city.name,
                    country: res.data.city.country,
                    temperature: (res.data.list[0].main.temp - 273.15).toFixed(0),
                    humidity: res.data.list[0].main.humidity,
                    pressure: res.data.list[0].main.pressure.toFixed(0),
                    weather: res.data.list[0].weather[0].main,
                    description: res.data.list[0].weather[0].description,
                    icon: res.data.list[0].weather[0].icon,
                    wind: res.data.list[0].wind.speed,
                    date: res.data.list[0].dt_txt
                }
            }, function() {
                console.log(this.state.weatherPrint);
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let weatherResult = null;
        const capitalizeFirstLetter = string => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if (this.state.loading === false) {
           weatherResult = <WeatherResult 
            city={this.state.weatherPrint.city}
            country={this.state.weatherPrint.country}
            temperature={this.state.weatherPrint.temperature}
            humidity={this.state.weatherPrint.humidity}
            pressure={this.state.weatherPrint.pressure}
            weather={this.state.weatherPrint.weather}
            description={capitalizeFirstLetter(this.state.weatherPrint.description)}
            icon={this.state.weatherPrint.icon}
            wind={this.state.weatherPrint.wind}
            date={this.state.weatherPrint.date}
            />
        } else {
            weatherResult = null;
        }
        return (
            <Aux>
                <form className={Classes.Form} onSubmit={this.getResults.bind(this)}>
                    <SearchBox change={this.handleInputChange}/>
                </form>
                {weatherResult}
            </Aux>
        )
    }
}

export default CheckWeather;