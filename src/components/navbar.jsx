import React, { Component } from "react";
import Counters from "./counters";
import App from "../App";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div className="container-fluid">
//           <a class="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="bg bg-pill ">{this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="bg bg-pill ">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

// A function component does not get its props via this.props, it gets them as an object which is the first parameter of the function.
