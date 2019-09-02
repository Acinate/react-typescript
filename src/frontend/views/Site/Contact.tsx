import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const heading: React.CSSProperties = {
	marginBottom: '2rem'
};

const contact: React.CSSProperties = {
	padding: "2rem 1rem",
	alignSelf: 'center',
	width: '100%',
	maxWidth: '500px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const form: React.CSSProperties = {
	width: '100%'
};

const textarea: React.CSSProperties = {
	resize: 'none'
};

export default class Contact extends React.Component {
	render() {
		return (
			<Container style={contact}>
				<h3 style={heading}>Questions or comments?</h3>
				<Form style={form}>
					<Form.Group controlId="formEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formName">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>

					<Form.Group controlId="formComments">
						<Form.Label>Comments</Form.Label>
						<Form.Control style={textarea} as="textarea" placeholder="Comments" rows="5" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Send Comment
					</Button>
				</Form>
			</Container>
		);
	}
}
