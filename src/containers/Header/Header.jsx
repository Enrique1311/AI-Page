import React from "react";
import "./Header.css";
import robot from "../../assets/robot.png";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Header = () => {
	return (
		<div
			className="section__padding"
			id="home"
		>
			<div className="header">
				<div className="header-content">
					{" "}
					<h1 className="gradient__text">
						Let's Build Something Amazing With MaxAI
					</h1>
					<p className="header-text">
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>
					<div className="header-input">
						<input
							tupe="email"
							placeholder="Your Email Address"
						/>
						<button type="button">Get Started</button>
					</div>
				</div>
				<div className="header-image">
					<img src={robot} />
				</div>
			</div>{" "}
			<SocialMedia />
		</div>
	);
};

export default Header;
