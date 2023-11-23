import React from "react";
import "./Possibility.css";
import Virtual from "../../assets/virtual.png";

const Possibility = () => {
	return (
		<div>
			<div className="possibilities-container">
				<img src={Virtual} />
				<div className="texts-container">
					<h2 className="gradient__text">
						The possibilities are beyond your imagination
					</h2>
					<p className="possibilities-text">
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
					<p className="request">Request Early Access to Get Started</p>
				</div>
			</div>
			<div className="possibilities-box">
				<h4>Register today & start exploring the endless possiblities.</h4>
				<button className="box-btn">Get Started</button>
			</div>
		</div>
	);
};

export default Possibility;
