import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const image = require('./../../assets/img/about.jpg');

const headerImage: React.CSSProperties = {
	width: '100%'
};

const grid: React.CSSProperties = {
	padding: '1rem 0rem'
};

const list: React.CSSProperties = {
	width: '200px',
	margin: '0 auto',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	listStyleType: 'none',
	height: '100%'
};

export default class About extends React.Component {
	render() {
		return (
			<Container>
				<img style={headerImage} src={image} alt="" />
				<Row style={grid}>
					<Col md="6" className="text-center">
						<h1>React-Typescript</h1>
						<p>
							React-Typescript is jam packed with all the tools you need. It uses Webpack to bundle all
							your files together and Babel to transpile your js so that even the oldest of browsers can
							read it. With added developer tools like Typescript, SCSS and Bootstrap your development
							speed will be 10x so you can tackle those deadlines with ease.
						</p>
					</Col>
					<Col md="6">
						<ul style={list}>
							<li>
								<Form.Check type="checkbox" checked label="SCSS" />
							</li>
							<li>
								<Form.Check type="checkbox" checked label="Bootstrap" />
							</li>
							<li>
								<Form.Check type="checkbox" checked label="Typescript" />
							</li>
							<li>
								<Form.Check type="checkbox" checked label="React Router" />
							</li>
							<li>
								<Form.Check type="checkbox" checked label="NodeJS & Express" />
							</li>
							<li>
								<Form.Check type="checkbox" checked label="Webpack & Babel" />
							</li>
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
