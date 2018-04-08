import React, { Component } from 'react';
import {View,StyleSheet,Image } from 'react-native';
import { Text } from "react-native";
import Ripple from 'react-native-material-ripple';
import {Button,ListItem} from "native-base";


export class Item extends Component {
  
   constructor() {
       super()
      
   } 


render() {
    return(
        
     <View style={[styles.item,{backgroundColor:"#243137"}]} onPress={()=>{alert("its fucking workss")}}>
     
     <Image source={{uri:this.props.photo}} style={{flex:1}}/>
     
      <View style={{flex:2,marginLeft:8}}>    
     <Text style={{color:"#FFFFFF"}}>{this.props.title}</Text>
     </View>
     </View>
 
    
    );
}


}



const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        height:100,
        borderWidth:1,
        borderColor:"#f5f5f5",
        padding:20,
        elevation:20
 
    }
})