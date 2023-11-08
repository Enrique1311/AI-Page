import "./App.css";
import Brand from "./components/Brand/Brand";
import CTAction from "./components/CTAction/CTAction";
import Navbar from "./components/Navbar/Navbar";
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
			<Brand />
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
