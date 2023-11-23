import React from "react";
import "./Footer.css";
import TransparentBtn from "../../components/MyButtons/TransparentBtn/TransparentBtn";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Footer = () => {
	return (
		<>
			{" "}
			<div
				className="footer section__padding"
				id="footer"
			>
				<h2 className="gradient__text">
					Do you want to step in to the future before others
				</h2>
				<TransparentBtn>Request Early Access</TransparentBtn>
				<div className="footer-content">
					<div className="footer-logo">
						<h3>GPT-3</h3>
						<p>All Rights Reserved</p>
						<SocialMedia />
					</div>
					<div className="footer-items-container">
						{" "}
						<div className="footer-items">
							<h4>Links</h4>
							<a href="#">Overons</a>
							<a href="#">Social Media</a>
							<a href="#">Counters</a>
							<a href="#">Contact</a>
						</div>
						<div className="footer-items">
							<h4>Company</h4>
							<a href="#">Terms & Conditions</a>
							<a href="#">Privacy Policy</a>
							<a href="#">Contact</a>
						</div>
						<div className="footer-items">
							<h4>Get in touch</h4>
							<p>Crechterwoord K12 182 DK</p>
							<p>085-132567</p>
							<p>info@payme.net</p>
						</div>
					</div>
				</div>
			</div>{" "}
			<p className="reserved">All rights reserved</p>
		</>
	);
};

export default Footer;
