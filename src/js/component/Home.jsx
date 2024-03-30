import React, { useState, useEffect } from "react";


//include images into your bundle

//create your first component
const Home = () => {
	let [Counter, setCounter] = useState(0);

  const day = Math.floor(Counter / (60 * 60 * 24));
  const hour = Math.floor((Counter / (60 * 60)) % 24);
  const minute = Math.floor((Counter / 60) % 60);
  const seconds = Counter % 60;

useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [Counter]);
	return (
<>
		<div className="container-fluid d-flex justify-content-center align-items-center mt-5 bg-dark text-white fs-1 m-0">
				<div className="mx-3 far fa-clock "></div>
				<div className=" mx-3 ">{day}</div>
				<div className="mx-3 ">{hour}</div>
				<div className="mx-3 ">{minute}</div>
				<div className="mx-3 ">{seconds}</div>
		</div>
</>
	);
};

export default Home;
