import React from "react";
import "./SocialMedia.css";
import { AiOutlineDropbox } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSlack, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="social-media">
			<a href="#">
				{" "}
				<FaFacebookSquare
					color="grey"
					size={30}
				/>
			</a>
			<a href="#">
				{" "}
				<RiInstagramFill
					color="gray"
					size={30}
				/>
			</a>
			<a href="#">
				{" "}
				<FaTwitter
					color="gray"
					size={30}
				/>
			</a>
			<a href="#">
				{" "}
				<AiOutlineDropbox
					color="gray"
					size={30}
				/>
			</a>
			<a href="#">
				{" "}
				<FaSlack
					color="gray"
					size={30}
				/>
			</a>
		</div>
	);
};

export default SocialMedia;
