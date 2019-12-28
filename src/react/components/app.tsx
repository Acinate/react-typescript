import {hot} from 'react-hot-loader/root';
import React from 'react';
import 'assets/scss/app.scss';

import logo from "assets/img/react.png";

const App = () => {
    return (
        <div className="app_container">
            <div className="app_inner">
                <h1>Welcome to React-Typescript!</h1>
                <img src={logo} alt="react_logo"/>
            </div>
        </div>
    )
};

export default hot(App);