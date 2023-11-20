import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
	return (
		<div className="feature">
			<div className="feature-content">
				<div className="feature-bar"></div>
				<h2 className="feature-title">{title}</h2>
			</div>
			<div className="feature-text">{text}</div>
		</div>
	);
};

export default Feature;
