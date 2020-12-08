import React from "react";
import { View, Text, TouchableOpacity,Image,Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default class ListCard_PlayGame extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{         
          alignSelf: "center",
          marginTop: height*0.015,
          marginBottom: height*0.015,
          backgroundColor: "#FFF",
          elevation: 1,
          width: '90%',
          borderRadius: 15,
          elevation: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical:height*0.014,
            alignSelf: "center",
          }}
        >
        <Image
        style={{width: width*0.07, height: height*0.04,}}
        source={require('../../images/logo-small.png')}
        />
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#5454bd",
              fontSize: width*0.05,
            }}
          >
            Name (You)
          </Text>

          <Text
            style={{
              fontSize: width*0.05,
              color: "#a2a2db",
              paddingHorizontal: 14,
            }}
          >
            {" "}
            - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4dd163",
              fontSize: width*0.05,
            }}
          >
            Ready
          </Text>
        </View>

        
        
      </TouchableOpacity>
    );
  }
}