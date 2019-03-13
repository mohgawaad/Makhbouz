
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoginForm from '../LoginForm';



export default class Splash extends Component {

  constructor() {
    super();
    this.state = {
      isVisible: true,
      loading: true
    }
  }


  Hide_Splash_Screen = () => {
    this.setState({ isVisible: false })
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 100);
  }

  render() {
    const  {isVisible} = this.state;
    const { container } = styles;

    return (

      <View style={{ flex: 1 }}>
        {
          isVisible ? <ImageBackground source={require('../../Images/Splash/splash.png')} style={container} />
            : <LoginForm />

        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
