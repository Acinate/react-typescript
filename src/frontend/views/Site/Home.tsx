import * as React from 'react';

import Container from 'react-bootstrap/Container';

import Logo from './../../components/Logo/Logo';

export interface IHome { }

const home: React.CSSProperties = {
	padding: "2rem 1rem",
	alignSelf: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

export default class Home extends React.Component {
	render() {
		return (
			<Container style={home}>
				<h1 className="text-center">React-Typescript</h1>
				<Logo />
				<h1 className="text-center">Starter Project</h1>
			</Container>
		);
	}
}
