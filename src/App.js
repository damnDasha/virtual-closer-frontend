import "./App.css";
import VirtualContext from "./VirtualContext";
import config from "./config";
// import PrivateRoute from "./Utils/PrivateRoute";
import PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import React, { Component } from "react";
import StartScreen from "./StartScreen/StartScreen";
import LoginPage from "./LoginPage/LoginPage";
import Register from "./Register/Register";

export class App extends Component {
  state = {
    events: [],
    outfits: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/events`),
      fetch(`${config.API_ENDPOINT}/outfit`),
    ])
      .then(([eventsRes, outfitsRes]) => {
        if (!eventsRes.ok)
          return eventsRes.json().then((e) => Promise.reject(e));
        if (!outfitsRes.ok)
          return outfitsRes.json().then((e) => Promise.reject(e));

        return Promise.all([eventsRes.json(), outfitsRes.json()]);
      })
      .then(([events, outfits]) => {
        this.setState({ events, outfits });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddDay = (event) => {
    this.setState({
      events: [...this.state.events, event],
    });
  };
  handleDeleteevent = (eventID) => {
    this.setState({
      events: this.state.events.filter((d) => d.id !== eventID),
    });
  };

  handleAddoutfit = (outfit) => {
    this.setState({
      outfits: [...this.state.outfits, outfit],
    });
  };
  handleDeleteoutfit = (outfit) => {
    this.setState({
      outfits: [...this.state.outfits, outfit],
    });
  };

  render() {
    const value = {
      days: this.state.days,
      foods: this.state.foods,
      addDay: this.handleAddDay,
      deleteDay: this.handleDeleteDay,
      addForm: this.handleAddFood,
      deleteFood: this.handleDeleteFood,
    };
    return (
      <VirtualContext.Provider value={value}>
        <div className="App">
          <PublicOnlyRoute exact path="/" component={StartScreen} />

          <PublicOnlyRoute exact path="/login" component={LoginPage} />
          <PublicOnlyRoute exact path="/register" component={Register} />
        </div>
      </VirtualContext.Provider>
    );
  }
}

export default App;
