
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import firebase from 'firebase';
import { Input, Button, Spinner } from '../../components'

export default class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            authError: '',
            signInLoading: false,
            signUpLoading: false,
        };

    }

    /** Sign In With Firebase */
    onSignInPress() {
        const { email, password } = this.state;
        this.setState({ authError: '', signInLoading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess.bind(this))
            .catch((error) => {
                this.setState({ authError: error })
            }, this.renderError.bind(this),
                this.onLoginFail.call(this)
            )
    }

    /** Sign Up With Firebase */
    onSignUpPress() {
        const { email, password } = this.state;
        this.setState({ authError: '', signUpLoading: true })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onSignUpSucess.bind(this))
            .catch((error) => {
                this.setState({ authError: error })
            }, this.renderError.bind(this),
                this.onLoginFail.call(this)
            )

    }

    /** When SignUp Sucess */
    onSignUpSucess() {
        this.setState({
            signUpLoading: false,
            authError: '',
        })

    }

    /** When SignIn Sucess */
    onLoginSucess() {
        this.setState({
            signInLoading: false,
            authError: '',
        })

    }

    /** Error Message From Firebase*/
    renderError() {
        const message = (this.state.authError.message)
        return <Text style={{ color: 'red', fontSize: 18 }}> {message} </Text>

    }


    /** When Register Failed */
    onLoginFail() {
        this.setState({
            signInLoading: false,
            signUpLoading: false,
        })

    }

    render() {

        const { signUpLoading, signInLoading, authError } = this.state;

        return (
            <ImageBackground source={require('../../Images/Splash/splash.png')} style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Text style={styles.textStyle}> Dubi's First {"&"} Best </Text>
                    <Text style={styles.secondTextStyle}> Bikery Delevery </Text>

                    { /** Email Input Field */}
                    <Input
                        placeholder="user@gmail.com"
                        placeholderTextColor='#fff'
                        label="Email"
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                        style={styles.inputStyle}
                    />

                    { /** Password Input Field */}
                    <Input
                        placeholder="password"
                        placeholderTextColor='#fff'
                        secureTextEntry={true}
                        label="Password"
                        value={this.state.text}
                        onChangeText={password => this.setState({ password })}
                        style={styles.inputStyle}

                    />

                    { /** SignIn Button */}
                    <Button style={styles.signInStyle}
                        onPress={this.onSignInPress.bind(this)}>
                        {signInLoading ?
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonStyle}>  Start With Bikery Delevery </Text>
                                <Spinner size={'small'} />
                            </View> :
                            <View>
                                <Text style={styles.buttonStyle}>  Start With Bikery Delevery </Text>
                            </View>
                        }
                    </Button>

                    {authError != '' ? <View>{this.renderError()}</View> : null}


                    <View style={{ flexDirection: 'row' }}>

                        { /** FaceBook Button */}
                        <Button style={styles.fbButtonStyle}>
                            <Text style={styles.fbTextStyle}>  Sign up With Facebook </Text>
                        </Button>

                        { /** SignUp Button */}
                        <Button onPress={this.onSignUpPress.bind(this)}
                            style={styles.signUpStyle}>
                            {signUpLoading ?
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.buttonStyle}>  Sign up </Text>
                                    <Spinner size={'small'} />
                                </View> :
                                <View>
                                    <Text style={styles.buttonStyle}>  Sign up </Text>
                                </View>
                            }
                        </Button>

                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30
    },
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ecf0f1',
        padding: 5,
    },
    secondTextStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ecf0f1',
        marginBottom: 10,
    },
    signInStyle: {
        width: '90%',
        backgroundColor: '#ccae62',
    },
    signUpStyle: {
        width: '30%',
        backgroundColor: '#cc8e35',

    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 5
    },
    buttonStyle: {
        color: '#fff',
        fontSize: 18
    },
    inputStyle: {
        margin: 10,
        height: 60,
        color: '#ecf0f1'
    },
    fbTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    fbButtonStyle: {
        width: '55%',
        backgroundColor: '#0984e3'
    }
});
