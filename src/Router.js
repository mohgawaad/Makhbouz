import React, { Component } from 'react';
import { Scene, Router  } from 'react-native-router-flux';
import Splash from './containers/Splash.js';
import LoginForm from './containers/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                {/** Splash Screen */}
                <Scene key="splash"  component={Splash} />
                {/** Register Screen */}
                <Scene key="login" component={LoginForm} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
