import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	let [Counter, setCounter] = useState(0);
	let [StopCounter, setStopCounter] = useState(false);

  const day = Math.floor(Counter / (60 * 60 * 24));
  const hour = Math.floor((Counter / (60 * 60)) % 24);
  const minute = Math.floor((Counter / 60) % 60);
  const seconds = Counter % 60;

 const stop = () => { 
	setStopCounter(true);
  }
  const reanude = () => {
	setStopCounter(false);
	setCounter(Counter + 1);
  }

  useEffect(() => {
    let interval = setInterval(() => {
		if(!StopCounter )
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [Counter]);

	return (
<>
		<div className="container-fluid d-flex justify-content-center align-items-center mt-5 bg-dark text-white fs-1 m-0">
				<div className="mx-3 far fa-clock "></div>
				<div className=" mx-3 d-grid">{day} Day</div>
				<div className="mx-3 d-grid">{hour} Hour</div>
				<div className="mx-3 d-grid">{minute} Minutes</div>
				<div className="mx-3 d-flex">{seconds} Seconds</div>
				
		</div>
		<div className="d-flex justify-content-center mt-2">
			<button className="btn btn-dark mx-2" type="button" onClick={stop} id="botton" > Stop </button>
			<button className="btn btn-dark mx-2" type="button" onClick={reanude} id="botton" > reanude </button>
		</div>	
</>
	);
};
console.log("#botton")
export default Home;
