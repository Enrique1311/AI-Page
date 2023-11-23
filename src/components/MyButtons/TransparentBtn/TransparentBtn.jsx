import React from "react";
import "./TransparentBtn.css";

const TransparentBtn = ({ children }) => {
	return (
		<button
			type="button"
			className="transparent-btn"
		>
			{children}
		</button>
	);
};

export default TransparentBtn;
