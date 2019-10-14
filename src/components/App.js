import React from "react";
import Form from "./Form";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: ""
  };

  handeInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=4bea9bc8d4bfd24c6953bdb10a110b19&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Error Sprobuj jeszcze raz");
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handeInputChange}
          submit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
