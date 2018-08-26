import React, { Component } from 'react';
import './index.css';
import Layout from './components/Layout/Layout';
import CheckWeather from './containers/CheckWeather/CheckWeather';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <CheckWeather />
        </Layout>
      </div>
    );
  }
}

export default App;
