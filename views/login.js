import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';

class Login extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
    componentWillMount(){

    }
    
    render() {
        return (
          // this is just random filler for the template, but this is where what the user sees is rendered
          <View style={{backgroundColor: 'green', height:'100%', width:'100%'}}>
            <Text style={{fontSize: 100, color:'purple'}}> hello world!</Text>
          </View>
        );
      }


      
    }
  





  //this lets the component get imported other places
  export default Login;