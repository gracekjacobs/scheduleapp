import React from 'react';
//this imports the basic components used to make views for the user, since this is just routing screens and isn't seen by the user, this isn't actually needed
import { StyleSheet, Text, View } from 'react-native';
//this is the package that's used for the screen routing
import { Router, Scene} from 'react-native-router-flux';
//this imports the other screen, usually you'll have a list of these for all the screens in teh app
import Login from './views/Login';
import TeacherList from './views/TeacherList';
import RegisteredLogin from './views/RegisteredLogin';
import Signup from './views/Signup';
import TeacherCalendarSetup from './views/TeacherCalendarSetup';
import TeacherScheduleHome from './views/TeacherScheduleHome';

export default function App() {
  return (
    //this is the screen router, it will move people from screen to screen
    <Router>
      {/* this is the root scene that is never seen by the user */}
      <Scene key='root'>
        <Scene
        // this sets the name of the screen (title in the nav bar)
          key = 'Login'
        //this is the component, the screen is rendered as a component, in other words this is the class for the screen to use
          component = { Login }
          //hide nav bar?
          hideNavBar = { true }
        />
        <Scene
          key = 'TeacherList'
          component = { TeacherList }
          hideNavBar = { false }
          title = 'Browse'
        />
        <Scene
          key = 'RegisteredLogin'
          component = { RegisteredLogin }
          hideNavBar = { true }
        />
        <Scene
          key = 'Signup'
          component = { Signup }
          hideNavBar = { true }  
        />
        <Scene
          key = 'TeacherCalendarSetup'
          component = { TeacherCalendarSetup }
          hideNavBar = { true }
        />
        <Scene
          key = "TeacherScheduleHome"
          component = { TeacherScheduleHome }
          hideNavBar = { true }
        />
      </Scene>
    </Router>
  );
}

