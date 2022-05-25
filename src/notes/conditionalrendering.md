import React, { Component } from "react";
// conditional rendering

class Counter extends Component {
state = {
count: 0,
tags: ["tenhaag"],
// imageUrl: "https://picsum.photos/13",
};
renderTags() {
if (this.state.tags.length === 0) return <p>No tags available</p>;
else
return (
<div style={{ fontSize: 40 }}>
<ul>
{this.state.tags.map((tag) => (
<li key={tag}>{tag}</li>
))}
</ul>
</div>
);
}

render() {
// let classesx = this.getBadgeClasses();

    return <div>
      {this.state.tags.length === 0 && "Please make a tag "}
      {/* add  */}
      {/* rendere when array is empty */}

      {this.renderTags()}</div>;

}
}

export default Counter;
