import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class RegisteredLogin extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  backPressed = () => {
    Actions.Login();
  }

  confirmation = () =>{
    Actions.TeacherScheduleHome();
  }

  render() {
    return (
      // this is just random filler for the template, but this is where what the user sees is rendered
      <View style={styles.background}>
        <Text style={styles.title}>
          MusicPro
        </Text>
        
        
        <View style={styles.list}>
          <Text>
            User account:
          </Text>
          <TextInput
            style={styles.inputBox}
          />
        </View>
        <View style={styles.list}>
          <Text>
            Password:
          </Text>
          <TextInput
            style={styles.inputBox}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.confirmation()} style={styles.button} activeOpacity={.6}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.backPressed()}} style={styles.button} activeOpacity={.6}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 70,
    paddingTop: '66%',
    color: 'white',
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 2,
    width: 95*(deviceWidth/100),
    height: 5*(deviceHeight/100),
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '30%',
    width: '50%',
  },
  button: {
    height: '30%',
    width: '50%',
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,    
  },
});


//this lets the component get imported other places
export default RegisteredLogin;