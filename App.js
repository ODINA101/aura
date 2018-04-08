import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from "./components/Home";
import Settings from './components/Settings';
import { Feather } from "@expo/vector-icons";
import Ripple from 'react-native-material-ripple';


const MyApp = DrawerNavigator({
  "ბიზნეს რჩევები":{ 
    screen:Home,
  },
  ნა: {
    screen:Home,
    title:"ნა"
  }
},{
  drawerOpenRoute:'DrawerOpen',
  drawerBackgroundColor: "black",
})

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
