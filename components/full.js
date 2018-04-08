import React from 'react';
import {Text,View,StyleSheet,Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class Full extends React.Component {

    static navigationOptions = ({navigation}) =>  ({
        title: navigation.state.params.title,
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: 'black',
          borderBottomWidth: 3,
        },
        headerTitleStyle: {
          fontSize: 18,
        },
      });

render() {
    return ( 
     
        <View>
        <Text>{this.props.navigation.state.params.title }</Text>  
        </View>
    )
}


}