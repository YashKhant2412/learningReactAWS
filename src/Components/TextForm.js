/** @format */

import React, { useState } from 'react';

const TextForm = (props) => {
	const [text, setText] = useState('Enter some text...');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleUtils = (event) => {
		const newText = text.toUpperCase();
		setText(newText);
	};

	const resetText = () => {
		setText('');
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
		<div style={props.modeStyle}>
			<h3 className="mt-5">Enter Text here</h3>
			<textarea
				name="myText"
				id="myText"
				rows="10"
				className="form-control mt-3"
				value={text}
				onChange={handleChange}
                style={{backgroundColor:props.mode==="dark"?"black":"white",color:props.mode==="dark"?"white":"black"}}
                ></textarea>
			<div
				className="mt-2"
				style={props.mode === 'dark' ? darkStyle : lightStyle}>
				<button className="btn btn-primary col-6" onClick={handleUtils}>
					Change Utils
				</button>
				<button className="btn btn-danger col-6" onClick={resetText}>
					Reset Text
				</button>
			</div>
		</div>
	);
};

export default TextForm;
