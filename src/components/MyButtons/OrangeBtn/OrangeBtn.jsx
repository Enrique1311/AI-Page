import React from "react";
import "./OrangeBtn.css";

const OrangeBtn = ({ children }) => {
	return (
		<button
			type="button"
			className="orange-btn"
		>
			{children}
		</button>
	);
};

export default OrangeBtn;
