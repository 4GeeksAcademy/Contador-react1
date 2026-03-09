import React from "react"
import ButtonActivo from "./button";


//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid  text-white">
			<div className="row justify-content-center flex-row-reverse bg-black"> 
				
     <div id="digito" className="col-1" >{props.digito1}</div>
	 <div id="digito" className="col-1 ">{props.digito2}</div>
	 <div id="digito" className="col-1">{props.digito3}</div>
	 <div id="digito" className="col-1">{props.digito4}</div>
	 <div id="digito" className="col-1">{props.digito5}</div>
	 <div id="digito" className="col-1">{props.digito6}</div>
	
				<div className="icon col-2">
					<i className="fa-solid fa-clock"></i>
				</div>
		</div>
	
		</div>
	);
};

export default Home;