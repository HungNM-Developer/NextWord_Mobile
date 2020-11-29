import React from "react";
import { View, Text, TouchableOpacity,Image } from "react-native";

export default class ListCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          
          elevation: 1,
          width: '90%',
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingVertical:20,
            alignSelf: "center",
          }}
        >
        <Image
        style={{width: 30, height: 30,}}
        source={require('../images/logo-small.png')}
        />
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            Name (You)
          </Text>

          <Text
            style={{
              fontSize: 20,
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
              fontSize: 20,
            }}
          >
            Ready
          </Text>
        </View>

        
        
      </TouchableOpacity>
    );
  }
}
