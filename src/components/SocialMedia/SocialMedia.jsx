import React from "react";
import "./SocialMedia.css";
import { AiOutlineDropbox } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSlack, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="social-media">
			<FaFacebookSquare
				color="grey"
				size={30}
			/>
			<RiInstagramFill
				color="gray"
				size={30}
			/>
			<FaTwitter
				color="gray"
				size={30}
			/>
			<AiOutlineDropbox
				color="gray"
				size={30}
			/>
			<FaSlack
				color="gray"
				size={30}
			/>
		</div>
	);
};

export default SocialMedia;
