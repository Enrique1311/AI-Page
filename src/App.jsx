import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./containers/Blog/Blog";
import Features from "./containers/Features/Features";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import WhatGTP3 from "./containers/WhatGTP3/WhatGTP3";

function App() {
	return (
		<>
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<div className="app-content">
				{" "}
				<WhatGTP3 />
				<Features />
				<Blog />
				<Footer />
			</div>
		</>
	);
}

export default App;
