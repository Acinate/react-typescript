import * as React from "react";

import { Container } from "react-bootstrap"

import Header from "./../../components/Header/Header";

export interface IHome { }

const home: React.CSSProperties = {
    alignSelf: "center",
    height: "calc(100vh - 112px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Container style={home}>
                    <h1 className="text-center">React-Typescript</h1>
                    <Header />
                    <h2 className="text-center">Time to code!</h2>
                </Container>
            </>
        );
    }
}