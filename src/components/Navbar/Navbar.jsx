import React from "react";
import "./Navbar.css";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import world_logo from "../../assets/world-logo.png";
import TransparentBtn from "../MyButtons/TransparentBtn/Transparent.jsx/TransparentBtn";
import OrangeBtn from "../MyButtons/OrangeBtn/OrangeBtn";

const Navbar = () => {
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
				<h3>GTP-3</h3>
			</a>
			<div className="navbar-links">
				<a href="#home">Home</a>
				<a href="#whatIsGTP">What is GTP?</a>
				<a href="#openAIc">Open AI</a>
				<a href="#aseStudies">Case Studies</a>
				<a href="#library">Library</a>
			</div>
			<div className="navbar-sign">
				<TransparentBtn>Sign In</TransparentBtn>
				<OrangeBtn>Sign Up</OrangeBtn>
			</div>
		</div>
	);
};

export default Navbar;
