import React from 'react';
import Logo from '../../components/Logo/Logo';

const homeStyles: React.CSSProperties = {
    padding: '2rem 1rem',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

interface HomeProps {
    name?: string;
}

const Home = (props: HomeProps) => (
    <div style={homeStyles}>
        <h1 className="text-center">{props.name != null ? `Hello, ${props.name}!` : 'Hey, stranger!'}</h1>
        <Logo/>
    </div>
);

export default Home;
