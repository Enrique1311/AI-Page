import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import world_logo from "../../assets/world-logo.png";
import TransparentBtn from "../MyButtons/TransparentBtn/Transparent.jsx/TransparentBtn";
import OrangeBtn from "../MyButtons/OrangeBtn/OrangeBtn";

const Menu = () => (
	<div className="navbar-menu">
		<div className="navbar-links-container">
			<a href="#home">Home</a>
			<a href="#whatIsGTP">What is GTP?</a>
			<a href="#openAI">Open AI</a>
			<a href="#caseStudies">Case Studies</a>
			<a href="#library">Library</a>
		</div>
		<div className="navbar-sign">
			{" "}
			<TransparentBtn>Sign In</TransparentBtn>
			<OrangeBtn>Sign Up</OrangeBtn>
		</div>
	</div>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="navbar">
			<a
				href="/"
				className="navbar-logo"
			>
				<img
					src={world_logo}
					alt="logo"
				/>
				<h3>GTP3</h3>
			</a>
			<div className="navbar-desk-links">
				<Menu />
			</div>{" "}
			<div className="navbar-mobile-menu">
				<RiMenu2Line
					color="white"
					size={30}
					onClick={() => setToggleMenu(true)}
				/>{" "}
				{toggleMenu && (
					<div className="navbar-mobile-links scale-up-center">
						<RiCloseLine
							color="white"
							size={30}
							onClick={() => setToggleMenu(false)}
						/>
						<Menu />
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
