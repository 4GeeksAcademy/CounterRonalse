import React from "react";
import Stop from "/workspaces/CounterRonalse/src/js/component/Stop.jsx";
import Restart from "/workspaces/CounterRonalse/src/js/component/Restart.jsx";

//include images into your bundle



//create your first component
const Home = (props) => {
	return (
<>
		<div className="container-fluid d-flex justify-content-center align-items-center mt-5 bg-dark text-white fs-1 m-0">
				<div className="mx-3 far fa-clock "></div>
				<div className=" mx-3">{props.Primero % 10}</div>
				<div className="mx-3">{props.Segundo % 10}</div>
				<div className="mx-3">{props.Tercero % 10}</div>
				<div className="mx-3">{props.Cuarto % 10}</div>
		</div>		
		<div className="container-fluid  d-flex justify-content-center mt-5">		


		</div>
</>
	);
};

export default Home;
