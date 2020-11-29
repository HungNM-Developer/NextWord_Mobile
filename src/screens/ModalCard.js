import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';


export default class ModalCard extends React.Component{
    render(){
        return(
            <View style={{
                paddingHorizontal:32,
                alignSelf:"center",
                marginTop:200,
                backgroundColor:"#FFF",
                height:386,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"RobotoBold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Full Name
                    </Text>

                    
                </View>
               

              
               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:25,
                    backgroundColor:"#44FEA1",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={this.props.onPress}
               >
                   <Text style={{
                       fontFamily:"RobotoBold",
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Check Out
                   </Text>
               </TouchableHighlight>

               
            </View>
        )
    }
}