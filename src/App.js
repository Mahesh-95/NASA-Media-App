import React, { Component } from "react";
import DateInput from "./components/DateInput";
import Photo from "./components/Photo";
import './App.css'
class App extends Component {
  state = {
    date: "",
    photo: "",
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key= API KEY`)
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key= API KEY `)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div className="container">
        <h1>Nasa Media Search</h1>
        <DateInput changeDate={this.changeDate}/>
        <Photo photo={this.state.photo}/>
      </div>
    );
  }
}
export default App;