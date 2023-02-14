/** @format */

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

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
		<div style={mode==='dark'?darkStyle:lightStyle}>
			<Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
      <div className="container fullpg">
        <TextForm mode={mode} modeStyle={mode==='dark'?darkStyle:lightStyle} />
      </div>
		</div>
	);
}

export default App;
