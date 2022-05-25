<!-- cOUNTER.JSX -->

import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
state = {
value: this.props.value,
// imageUrl: "https://picsum.photos/13",
};

formatvalue() {
const { value: value } = this.state;

    return value === 0 ? "Zero" : value;

}

classStyles() {
let classes = "badge m-4 bg-";

    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;

}

handleIncrement = () => {
console.log("increment clicked", this);
// console.log(product);
this.setState({ value: this.state.value + 1 });
// IMPORTANT PART IN UPDATING STATES
};
// this is for hanfling events correspond to onclick in the button

// doHandleIncrementArgument );
// };

// product object has to be defined ultimately
render() {
// let classesx = this.getBadgeClasses();

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>

        <button
          onClick={() => this.handleIncrement()}
          style={{ fontSize: 20 }}
          className="btn btn-danger btn-sm m-2"
        >
          Incremenent
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );

}

getBadgeClasses() {
let classesx = "badge m-2 bg-";
// bg- helps with preventing us to repeat bg in our function below
classesx += this.state.value === 0 ? "warning" : "primary";
return classesx;
}
}

export default Counter;

<!-- COUNTERS.JSX -->

import React from "react";
import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
state = {
counters: [
{ id: 1, value: 7 },
{ id: 2, value: 0 },
{ id: 3, value: 0 },
{ id: 4, value: 0 },
{ id: 5, value: 0 },
],
};
// handleDelete = (counterId) => {
// console.log("event handler called", counterId);
// };
handleDelete = (counterId) => {
const counters = this.state.counters.filter((c) => c.id !== counterId);
this.setState({ counters });
};
handleReset = () => {
const counters = this.state.counters.map((c) => {
c.value = 0;
return c;
});
this.setState({ counters });
};

render() {
return (

<div>
<button className="btn btn-primary btn-small m-2 ">Reset</button>
{this.state.counters.map((counter) => (
<Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          >
<h5> Counter number {counter.id}</h5>
</Counter>
))}
</div>
);
}
}

export default Counters;
