//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.jsx";
import MiComponente from "./component/Home.jsx";

     ReactDOM.render(<MiComponente />, document.querySelector("#app"));

//render your react application





