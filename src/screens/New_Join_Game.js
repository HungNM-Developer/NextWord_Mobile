import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';
import { baseURL } from '../shared/baseURL';

export default class New_Join_Game extends React.Component {
  static navigationOptions = {
    title: 'New_Join_Game',
  };
  componentDidMount(){
    console.log(baseURL);
  }
  
  render() {
    
    const { navigate, state } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../images/back.png")}
        style={{ height: "100%", width: "100%", }}
      >

        <Image
          source={require("../images/Layer1.png")}
          style={{ height: 40, width: 40, borderRadius: 30, marginTop: 20, marginLeft: 320 }}
        />
        <View
          style={{
            width: "100%",
            marginTop: 60,

            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <View
            style={{
              width: 250,
              height: 250,
              borderRadius: 200,

              backgroundColor: "#ffff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/logo1.png")}
              style={{ height: 220, width: 220, borderRadius: 200, }}
            />
          </View>
        </View>



        <View style={{ paddingHorizontal: 30, marginTop: 40 }}>
          <Button style={{
            borderRadius: 30, padding: 5,
            backgroundColor: '#fff',
          }}
            color="#fff"
            mode="contained"
            onPress={() => navigate(
              'Player'
            )}>
            <Text style={{ color: '#4b3ca7', fontSize: 25, }}>
              Create Game
            </Text>
          </Button>
          <Button style={{
            borderRadius: 30, marginTop: 20, padding: 5,
            backgroundColor: '#ffff',
          }}
            color="#fff"
            mode="contained"
            onPress={() => navigate(
              'Join_Game'
            )}>
            <Text style={{ color: '#4b3ca7', fontSize: 25, }}>
              Join Game
            </Text>
          </Button>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: "#b1a7b9",
            marginTop: 40,
            
          }}>
          How To Play
        </Text>


      </ImageBackground>


    );
  }
}