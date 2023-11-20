import "./App.css";
import CTAction from "./components/CTAction/CTAction";
import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Blog from "./containers/Blog/Blog";
import Features from "./containers/Features/Features";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Possibility from "./containers/Possibility/Possibility";
import WhatGTP3 from "./containers/WhatGTP3/WhatGTP3";

function App() {
	return (
		<>
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<WhatGTP3 />
			<Features />
			<Possibility />
			<CTAction />
			<Blog />
			<Footer />
		</>
	);
}

export default App;
