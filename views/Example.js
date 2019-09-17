import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

class Example extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
    componentWillMount(){

    }
    
    render() {
        return (
          // this is just random filler for the template, but this is where what the user sees is rendered
            <View style={styles.container}>
                <Text style={styles.title}> this is the first screen </Text>
            </View>
        );
    }
} 

//stylesheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 30
    },
    options: {
      color: 'white',
      fontSize: 30,
      paddingTop: 20
    },
    badoptions: {
      color: 'white',
      fontSize: 30,
      paddingTop: 20
    }
  });


  //this lets the component get imported other places
  export default Example;