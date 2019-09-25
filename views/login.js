import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
//for screen switching
import { Actions } from 'react-native-router-flux';

class Login extends React.Component {

    //I always like keeping this here, it is for performing actions before the component (the screen) loads
    componentWillMount(){

    }

    buttonPressed = () => {
        //this is how you switch screens
        // Actions.login();
    }
    
    render() {
        return (
          // this is just random filler for the template, but this is where what the user sees is rendered
          <View>
           {/* this loads the image into the background */}
            <ImageBackground source={{uri: 'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.background} resizeMode='cover'>
                <Text style={styles.title}> ScheduleAppName  </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.buttonPressed()} style={styles.button}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.buttonPressed()} style={styles.button}>
                        <Text style={styles.buttonText}>sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
          </View>
        );
    }
}
  

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        height: '100%',
        width: '100%',
    },
    button: {
        height: 50,
        width: '95%',
        backgroundColor: '#1c6e8c',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 30,
        color: 'white'
    },
    title: {
        fontSize: 45,
        paddingTop: '66%',
        color: 'white',
    }


});



  //this lets the component get imported other places
  export default Login;