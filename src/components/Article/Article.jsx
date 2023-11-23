import React from "react";
import "./Article.css";

const Article = ({ imgUrl, date, title }) => {
	return (
		<div className="article">
			<div className="article-image">
				<img
					src={imgUrl}
					alt="image"
				/>
			</div>
			<div className="article-content">
				<div>
					{" "}
					<p>{date}</p>
					<h3>{title}</h3>{" "}
				</div>{" "}
				<a href="">Read Full Article</a>
			</div>{" "}
		</div>
	);
};

export default Article;
