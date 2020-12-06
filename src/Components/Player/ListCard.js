import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export default class ListCard extends React.Component {
  
  renderYou() {
    
    if (this.props.you == this.props.item.id) {
      return <Text
        style={{
          flex: 1,
          fontFamily: "RobotoBold",
          color: "#4dd163",
          fontSize: width*0.05,
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
          color: "#4dd163",
          fontSize: width*0.05,
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
      color: "#5454bd",
      fontSize: width*0.05,
    }}
  >
    {name}
  </Text>
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => { }}
        style={{
          alignSelf: "center",
          marginTop: height*0.03,
          backgroundColor: "#FFF",
          elevation: 10,
          width: '90%',
          borderRadius: 15,
          marginBottom: 1
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical:height*0.014,
            //paddingHorizontal: 20,
            //alignSelf: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{flex: 1, paddingLeft:20}}>
             <Image
            style={{ width: width*0.07, height: height*0.04, borderRadius: 30 }}
            source={{ uri: this.props.item.photoURL }}
          />
          </View>

         {this.renderName()}
         

          <Text
            style={{
              flex: 1,
              fontSize: width*0.05,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >

            - - - - - - - -
          </Text>
          {this.renderYou()}

        </View>



      </TouchableOpacity>
    );
  }
}
