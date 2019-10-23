import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Signup extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  state = {
    student: true,
    email : '',
    password: '',
    name: '',
    phone: '',
    teacherCode: ''
  }

  studentPressed = () => {
    this.setState({
      student: true
    })
  }

  teacherPressed = () => {
    this.setState({
      student: false
    })
  }

  studentDone = () => {
    Actions.TeacherScheduleHome();
  }

  teacherDone = () => {
    Actions.TeacherScheduleHome();
  }

  render() {
    return (
      // this is just random filler for the template, but this is where what the user sees is rendered
      <View style={styles.background}>
        <Text style={styles.imAText}> I'm a </Text>
        <View style={styles.studentTeacherContainer}>
          <TouchableOpacity onPress={() => this.studentPressed()}>
            {this.state.student == true? <Text style={styles.studentButton}>Student</Text> : <Text style={styles.studentButtonDisabled}>Student</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.teacherPressed()}>
            {this.state.student == true? <Text style={styles.teacherButtonDisabled}>Teacher</Text> : <Text style={styles.teacherButton}>Teacher</Text>}
          </TouchableOpacity>
        </View>
        {this.state.student == true? 
        //if the person is a student it will show this
        <View style={styles.promptsContainer}>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.email}
              placeholder='email'
              onChangeText={(email) => this.setState({email: email})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.password}
              placeholder='password'
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.number}
              placeholder='000-000-0000'
              onChangeText={(number) => this.setState({number: number})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.name}
              placeholder='name'
              onChangeText={(name) => this.setState({name: name})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.teacherCode}
              placeholder='teacher code'
              onChangeText={(teacherCode) => this.setState({teacherCode: teacherCode})}
            />
          </View>
          <TouchableOpacity onPress={() => {this.studentDone()}}>
            <Text style={styles.doneButton}> Done </Text>
          </TouchableOpacity>
        </View> 
        : 
        //if the person is a teacher it will show this
        <View style={styles.promptsContainer}>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.email}
              placeholder='email'
              onChangeText={(email) => this.setState({email: email})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.password}
              placeholder='password'
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.number}
              placeholder='000-000-0000'
              onChangeText={(number) => this.setState({number: number})}
            />
          </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.name}
              placeholder='name'
              onChangeText={(name) => this.setState({name: name})}
            />
          </View>
          <TouchableOpacity onPress={() => {this.teacherDone()}}>
              <Text style={styles.doneButton}> Done </Text>
          </TouchableOpacity>
        </View>
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  imAText: {
    fontSize: 30,
    color: 'white',
    paddingTop: 80
  },
  studentTeacherContainer: {
    flexDirection: 'row',
    paddingTop: 20
  },
  studentButton: {
    fontSize: 40,
    paddingRight: 20,
    color: 'white'
  },
  studentButtonDisabled:{
    fontSize: 40,
    paddingRight: 20,
    color: 'grey'
  },
  teacherButton: {
    fontSize: 40,
    paddingLeft: 20,
    color: 'white'
  },
  teacherButtonDisabled: {
    fontSize: 40,
    paddingLeft: 20,
    color: 'grey'
  },
  promptsContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  textInputStyle: {
    flex: 1
  },
  userInfoInput: {
    height: 30,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  doneButton: {
    fontSize: 20,
    color: 'white',
    marginTop: 20
  }
});


//this lets the component get imported other places
export default Signup;