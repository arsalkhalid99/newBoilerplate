import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from './components/SideBar'
import Main from "./components/Main";
import "./App.css";
import "./scss/style.scss";

function App()
{

	const [showSideBar, handleSideBar] = useState(false);
	const [iconClickedIndex, handleIconClicked] = useState(0);


	const haddleIconsClick = (index) =>
	{
		handleIconClicked(index)
	}


	const props = { handleSideBar, showSideBar }
	// let Comp = components[iconClickedIndex]
	return (
		<div className="App">
			<Header {...props} />
			<div className="main">
				<SideBar showSideBar={showSideBar} haddleIconsClick={haddleIconsClick} />
				<div className="right">
					<div className="content-body">
						<Main />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
