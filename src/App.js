

import React, {Component} from 'react';
import firebase from 'firebase'
import Router from './Router';

export default class App extends Component{


  componentDidMount() {
      /** Config for firebase */
      firebase.initializeApp(
          {
              apiKey: "AIzaSyCAo8Gnqv1TWwh1WPQj4smu6-Rj66WH8N4",
              authDomain: "authentication-f695c.firebaseapp.com",
              databaseURL: "https://authentication-f695c.firebaseio.com",
              projectId: "authentication-f695c",
              storageBucket: "authentication-f695c.appspot.com",
              messagingSenderId: "112066056380"
          }

      );

  }

  render() {
    return (
        <Router/>
    );
  }
}
