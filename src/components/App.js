import React from "react";
import Form from "./Form";
import Result from "./Result";
import "../style.scss";

const APIkey = "4bea9bc8d4bfd24c6953bdb10a110b19";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    country: "",
    sunrise: "",
    sunset: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    pressure: "",
    wind: "",
    error: false
  };

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Error !! Spróbuj jeszcze raz");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        this.setState(state => ({
          error: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp.toFixed(0),
          minTemp: data.main.temp_min.toFixed(0),
          maxTemp: data.main.temp_max.toFixed(0),
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: state.value,
          country: data.sys.country
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          error: true,
          city: prevState.value
        }));
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleSubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
