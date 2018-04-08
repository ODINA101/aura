import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,TouchableOpacity} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import { Feather } from "@expo/vector-icons";
import Toolbar from './toolbar';
import { Button,Spinner,List,ListItem } from 'native-base';
import { Item } from './item';
import axios from "axios"
import { ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
 

export default class HomeList extends React.Component {


 
constructor(props) {
super(props);

console.warn(props)

    this.state = {
        items:[
        ],
    loading:true,
    sl:10,
    loadingMore:false

}



axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
    this.setState({items:response.data,loading:false});
   
})


}


    static navigationOptions = {
        header: ( /* Your custom header */
        <View />
        )
      };

    render() {
var x = this.state.sl;
if(this.state.loading) {
    return( 

        <View style={{flex:1,backgroundColor:"#E6E7EA"}}> 
     <View style={{flex:1,justifyContent:"center",alignItems:"center",alignSelf:"center"}}>
     <Spinner color='green' />
     </View> 
       </View>
       );
}else{
    return( 

        <View style={{flexDirection:"column",flex:1}}> 
       <Toolbar nav={this.props.navigation}  title="მთავარი" />  
       <ScrollView style={{flex:1}}   onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        this.setState({sl:this.state.sl+5})
      }
    }} 
    > 

     
   {
       this.state.items.slice(0,this.state.sl).map(data => {
           return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('full',{title:data.title})}>
            <Item key={data.id} photo={data.thumbnailUrl} title={data.title}/> 

           </TouchableOpacity>
      
           );
       })
   }
<Spinner />
   </ScrollView>
       </View>
       );
}
  
    }
}