import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/13",
  };
  formatCount() {
    const { count } = this.state;
    // return count === 0 ? <h1>Zero </h1> : count;
    // if (count == 0) {
    //   return "zerowwwww";
    // } else {
    //   return "Nope";
    // }
    return count === 0 ? "Zero" : count;
  }
  //   styles = {
  //     fontSize: 20,
  //   };

  classStyles() {
    let classes = "badge m-4 bg-";
    // bg- helps with preventing us to repeat bg in our function below

    // if (this.state.count === 0) {
    //   classes += "primary";
    // } else {
    //   classes += "warning";
    // }
    // ^^^

    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    // let classesx = this.getBadgeClasses();

    return (
      <div>
        {/* <img
          src={this.state.imageUrl}
          className="rounded float-right"
          alt="Responsive"
        /> */}
        {/* setting image attributes^^^^^ */}
        {/* <span className={this.classStyles()}>{this.formatCount()}</span> */}

        {/* <span style={this.styles} className="badge bg-primary m-4">
          {this.formatCount()}
        </span> */}
        {/* bootstrap in react^^^ */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button style={{ fontSize: 40 }} className="btn btn-danger">
          Incremenent
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classesx = "badge m-2 bg-";
    // bg- helps with preventing us to repeat bg in our function below
    classesx += this.state.count === 0 ? "warning" : "primary";
    return classesx;
  }
}

export default Counter;
