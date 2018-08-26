import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import SearchBox from '../../components/SearchBox/SearchBox';

class CheckWeather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        this.setState({search: value}, function() {
            console.log(this.state.search);
        });
    }


    render() {
        return (
            <Aux>
                <SearchBox change={this.handleInputChange}/>
            </Aux>
        )
    }
}

export default CheckWeather;