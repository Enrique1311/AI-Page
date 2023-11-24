import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./containers/Blog/Blog";
import Features from "./containers/Features/Features";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import WhatMaxAI from "./containers/WhatMaxAI/WhatMaxAI";

function App() {
	return (
		<>
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<div className="app-content">
				{" "}
				<WhatMaxAI />
				<Features />
				<Blog />
				<Footer />
			</div>
		</>
	);
}

export default App;
