/** @format */

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
	const [mode, setMode] = useState('light');

	const toggleMode = () => {
		console.log('toggling...');
		if (mode === 'light') {
			setMode('dark');
			console.log('Dark mode on');
		} else {
			setMode('light');
			console.log('light mode on');
		}
	};

	const darkStyle = {
		backgroundColor: '#0a2944',
		color: 'white',
	};

	const lightStyle = {
		backgroundColor: 'white',
		color: 'black',
	};

	return (
		<Router>
			<div style={mode === 'dark' ? darkStyle : lightStyle}>
				<Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
				<div className="container fullpg">
					<Routes>
						<Route exact path="/" element={<TextForm />}></Route>
						<Route exact path="/about" element={<About />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
