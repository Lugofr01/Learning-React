import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("preprop", prevProps);
    console.log("previousstate", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call from server
    }
  }
  componentWillUnmount() {
    console.log("counter-unmount");
  }
  formatvalue() {
    const { value } = this.props.counter;

    return value === 0 ? "0" : value;
  }

  classStyles() {
    let classes = "badge m-4 bg-";

    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-danger btn-sm m-2"
        >
          Incremenent
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ width: 30, fontSize: 20 }}
          className="btn-danger btn-sm m-2"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    // bg- helps with preventing us to repeat bg in our function below
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
