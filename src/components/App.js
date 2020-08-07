import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";

export default class App extends Component {
  appConfig = {
    apiKey: "6b3c2ce834084aa8a9377db93d502db1",
  };

  state = { lon: null, lat: null, error: "", apiData: [] };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => this.setState({ error: err.message })
    );
  }

  getWeather = (lat, lon, key) => {
    axios
      .get(
        `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}`
      )
      .then((res) => {
        this.setState({ apiData: res.data.data });
      })
      .catch((err) => this.setState({ error: err }));
  };

  onButtonSubmit = () => {
    this.getWeather(this.state.lat, this.state.lon, this.appConfig.apiKey);
    console.log(this.state.apiData[0]);
  };

  render() {
    return (
      <div className="container">
        <Display onButtonSubmit={this.onButtonSubmit} />
      </div>
    );
  }
}
