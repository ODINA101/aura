import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { Feather } from "@expo/vector-icons";
import {Text} from "native-base";



export default class Toolbar extends React.Component {
 

render() {
    return(
        <View style={styles.toolbar}>
      
         <Feather name="menu" size={28} color="white" onPress={()=> this.props.nav.navigate("DrawerOpen")} />
        <View  style={{marginLeft:20,marginBottom:5}}>
     <Text style={{color:"white",fontSize:15}}>{this.props.title}</Text>
     </View>
     </View>
    )
}




}

const styles = StyleSheet.create({
    toolbar: {
        height:80,
        backgroundColor:"black",
        flexDirection: 'row',
        alignItems: 'center',
        padding:30,
        paddingTop:50,  
        elevation:4
      }
})