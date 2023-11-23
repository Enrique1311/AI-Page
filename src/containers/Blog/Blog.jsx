import React from "react";
import "./Blog.css";
import Article from "../../components/Article/Article";
import blog1 from "../../assets/blog-images/blog1.jpg";
import blog2 from "../../assets/blog-images/blog2.jpg";
import blog3 from "../../assets/blog-images/blog3.jpg";
import blog4 from "../../assets/blog-images/blog4.jpg";
import blog5 from "../../assets/blog-images/blog5.jpg";

const Blog = () => {
	return (
		<div
			className="blog section__padding"
			id="blog"
		>
			<h2 className="gradient__text">
				A lot is happening, We are blogging about it.
			</h2>
			<div className="blog-container">
				<div className="blog-container-left">
					<Article
						imgUrl={blog1}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
				<div className="blog-container-right">
					<Article
						imgUrl={blog2}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog3}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog4}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog5}
						date="Sep 26, 2021"
						title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
