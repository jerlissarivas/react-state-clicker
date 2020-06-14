import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.randNum = this.randNum.bind(this);
  }

  randNum() {
    let rand = Math.floor(Math.random() * 11);
    this.setState({ num: rand });
  }

  render() {
    return (
      <div>
        <h1>Your number is: {this.state.num} </h1>
        {this.state.num === 7 ? (
          <h2>You win!</h2>
        ) : (
          <button onClick={this.randNum}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Number;
