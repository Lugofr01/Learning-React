import React from "react";
import { Component } from "react";
import Counter from "./counter";
import App from "../App";

class Counters extends Component {
  render() {
    const { onDelete, counters, onIncrement, onReset, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2 ">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          >
            <h5> Counter number {counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
