import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const image = require('./../../assets/img/about.jpg');
const checkbox = require('./../../assets/img/checkbox.png');

const headerImage: React.CSSProperties = {
	width: '100%',
	marginBottom: "1rem"
};

const checkboxImage: React.CSSProperties = {
	width: "50px"
}

const grid: React.CSSProperties = {
	padding: '1rem 0rem'
};

const list: React.CSSProperties = {
	margin: '0 auto',
	width: "300px",
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	listStyleType: 'none',
	height: '100%'
};

const listItem: React.CSSProperties = {
	display: "flex",
	alignItems: "center"
}

const listItemText: React.CSSProperties = {
	margin: "0",
	fontSize: "24px"
}

const features = ["Bootstrap", "Typescript", "React Router", "Node + ExpressJS", "Live Reloading"];

export default class About extends React.Component {
	render() {
		return (
			<Container>
				<img style={headerImage} src={image} alt="" />
				<h1 className="text-center">React-Typescript</h1>
				<hr />
				<Row style={grid}>
					<Col md="6" className="text-center">
						<p>
							React-Typescript is jam packed with all the tools you need. It uses Webpack to bundle all
							your files together and Babel to transpile your javascript so that even the oldest of browsers can
							run.
						</p>
						<p>React-Typescript uses the SCSS framework to handle global CSS styles and library imports like Bootstrap.</p>
						<p>
							React-Typescript supports new React 16.6+ features like <a href="https://reactjs.org/docs/hooks-intro.html">
								React Hooks</a> out of the box. It also supports Live Reloading so you can view your changes as you save your changes.
						</p>
						<p>React-Typescript makes deploying your code to production super simple. All you need to do is move your /dist/ folder to your
							live server and run the project!
						</p>
					</Col>
					<Col md="6">
						<ul style={list}>
							{features.map((f, i) => {
								return (<li style={listItem} key={i}>
									<img src={checkbox} style={checkboxImage} alt="check" /> <p style={listItemText}>{f}</p>
								</li>)
							})}
						</ul>
					</Col>
				</Row>
				<hr />
				<h2 className="text-center">What are you waiting for?</h2>
				<h3 className="text-center">Let's get to coding!</h3>
				<p className="text-center">
					Click <a href="https://github.com/acinate/react-typescript">here</a> to download this starter
					project.
				</p>
			</Container>
		);
	}
}
