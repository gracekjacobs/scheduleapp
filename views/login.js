import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
//for screen switching
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {

    //I always like keeping this here, it is for performing actions before the component (the screen) loads
    componentWillMount(){

    }

    loginPressed = () => {
        // this is how you switch screens
        Actions.RegisteredLogin();
    }

    signupPressed = () => {
        Actions.Signup();
    }
    
    render() {
        return (
          // this is just random filler for the template, but this is where what the user sees is rendered
          <View>
           {/* this loads the image into the background */}
            <View style={styles.background}>
                <Text style={styles.title}> MusicPro  </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.loginPressed()} style={styles.button} activeOpacity={.6}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.signupPressed()} style={styles.button} activeOpacity={.6}>
                        <Text style={styles.buttonText}>sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        );
    }
}
  

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        height: '75%',
        width: '100%',
    },
    button: {
        height: 50,
        width: '95%',
        backgroundColor: 'white',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
    },
    buttonText: {
        fontSize: 30,
        color: 'black'
    },
    title: {
        fontSize: 70,
        paddingTop: '66%',
        color: 'white',
    }


});



  //this lets the component get imported other places
  export default Login;