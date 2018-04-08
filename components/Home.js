import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import { Feather } from "@expo/vector-icons";
import Toolbar from './toolbar';
import {
    StackNavigator,
  } from 'react-navigation';
  
import HomeList from './HomeList';
import Full from './full';

() => {
    console.error(this.props.navigation)
}
const Navigation = StackNavigator({
    HomeList:{screen:HomeList},
    full:{screen:Full}
},{
    headerMode:"screen" 
})

 export default Navigation;