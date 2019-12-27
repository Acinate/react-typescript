import {hot} from 'react-hot-loader/root';
import React from 'react';
import '../../assets/scss/app.scss';

const App = () => {
    return (
        <div className="app_container">
            <div className="app_inner">
                <h1>Welcome to React-Typescript!</h1>
            </div>
        </div>
    )
};

export default hot(App);