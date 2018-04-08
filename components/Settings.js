import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import Toolbar from './toolbar';


export default class Settings extends React.Component {
    render() {
        return( 
            <View>
            <Toolbar nav={this.props.navigation}/>
                
              <Text>hello from settings </Text>
            </View>
        );
    }
}