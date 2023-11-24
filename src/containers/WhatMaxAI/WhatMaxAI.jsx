import React from "react";
import "./WhatMaxAI.css";
import Feature from "../../components/Feature/Feature";

const WhatMaxAI = () => {
	return (
		<div
			className="what gradient__bg section__margin section__padding"
			id="whatMaxAI"
		>
			<div className="what-features">
				<Feature
					title="What is MaxAI?"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="what-title gradient__secondary">
				<h1 className="gradient__text">
					What is MaxAI The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className="what-features">
				<Feature
					title="Chatbots"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
				/>
				<Feature
					title="Knowledgebase"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
				<Feature
					title="Education"
					text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
				/>
			</div>
		</div>
	);
};

export default WhatMaxAI;
