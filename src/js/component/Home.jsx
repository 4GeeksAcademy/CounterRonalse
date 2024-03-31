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

  useEffect(() => {
    let interval = setInterval(() => {
		if(!StopCounter)
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [Counter]);

  const stop = () => { 
	setStopCounter(true);
  }

  const reanude = () => {
	setStopCounter(false);
	setCounter(Counter + 1);
  }
	return (
<>
		<div className="container-fluid d-flex justify-content-center align-items-center mt-5 bg-dark text-white fs-1 m-0">
				<div className="mx-3 far fa-clock "></div>
				<div className=" mx-3 ">{day}</div>
				<div className="mx-3 ">{hour}</div>
				<div className="mx-3 ">{minute}</div>
				<div className="mx-3 ">{seconds}</div>
				
		</div>
			<button className="btn btn-dark" type="button" onClick={stop} id="botton" > Stop </button>
			<button className="btn btn-dark" type="button" onClick={reanude} id="botton" > reanude </button>
</>
	);
};
console.log("#botton")
export default Home;
