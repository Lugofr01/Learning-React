import React, { Component } from "react";

class Counter extends Component {
state = {
count: 0,
// imageUrl: "https://picsum.photos/13",
};

formatCount() {
const { count } = this.state;

    return count === 0 ? "Zero" : count;

}

classStyles() {
let classes = "badge m-4 bg-";

    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;

}

handleIncrement = () => {
console.log("increment clicked", this);

    this.setState({ count: this.state.count + 1 });
    // IMPORTANT PART IN UPDATING STATES

};
// this is for hanfling events correspond to onclick in the button

render() {
// let classesx = this.getBadgeClasses();

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 40 }}
          className="btn btn-danger"
        >
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
