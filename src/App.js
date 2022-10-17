import axios from "axios";
import React from "react";
import Qoutes from "./Qoutes";

import "./styles.css";

class App extends React.Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        this.setState({ advice });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className="App">
          <div className="card">
            <h1 className="heading">{this.state.advice} </h1>
            <button className="button">
              <span onClick={this.fetchAdvice}>Give Me Advice!</span>
            </button>
          </div>
        </div>
        <Qoutes />
      </>
    );
  }
}
export default App;
