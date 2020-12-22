import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import * as Animatable from 'react-native-animatable';
export default class ListCard extends React.Component {
  
  renderYou() {
    
    if (this.props.you == this.props.item.id) {
      return <Text
        style={{
          flex: 1,
          fontFamily: "RobotoBold",
          color: "#44FEA1",
          fontSize:width*0.053,//22w
        }}
      >
        You
    </Text>
    }
    else {
      return <Text
        style={{
          flex: 1,
          fontFamily: "RobotoBold",
          color: "#44FEA1",
          fontSize: width*0.053,//22w
        }}
      >
        Friend
  </Text>
    }

  }

  renderName()
  {
    let name = this.props.item.name;
    if(name.length > 4)
    {
      name = name.slice(0,4) + '...';
    }
    else
    {
      name = name;
    }
    return  <Text
    style={{
      flex: 1,
      fontFamily: "RobotoBold",
      color: "#ffffff",
      fontSize: width*0.053,//22w
    }}
  >
    {name}
  </Text>
  }
  render() {
    //console.log(this.props.turnUser);
    return (
      <Animatable.View animation="bounceInRight" duration={2000} delay={1000}>
        <TouchableOpacity
        onPress={() => { }}
        style={{
          
          alignSelf: "center",
          
          backgroundColor:  "#5450bb",
          elevation: 8,
          width: '90%',
          borderRadius: 50,
          marginVertical:height*0.0146,//10h
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical:height*0.0146,//10h
            
            alignSelf: "center",
            
          }}
        >
          <View style={{flex: 1, paddingLeft:width*0.0486}}>
             <Image
            style={{ width: width*0.0729,
               height: height*0.0439,               
               borderRadius: 30 ,}}
            source={{ uri: this.props.item.photoURL }}
          />
          </View>
         {this.renderName()}
          <Text
            style={{
              flex: 1,
              fontSize: width*0.053,//22w
              color: "#b1a7b9",
              paddingHorizontal: width*0.036,//15w
            }}
          >
            - - - - - - 
          </Text>
          {this.renderYou()}
        </View>
      </TouchableOpacity>
      </Animatable.View>   
    );
  }
}
