import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground, StyleSheet, Dimensions } from "react-native";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button, } from 'react-native-paper';
import { Card, ListItem, Input, } from 'react-native-elements';
import { baseURL } from '../shared/baseURL';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class New_Join_Game extends React.Component {
  static navigationOptions = {
    title: 'New_Join_Game',
  };
  componentDidMount() {
    console.log(baseURL);
  }

  render() {

    const { navigate, state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/newjoin.png")}
          style={styles.image}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../images/Layer1.png")}
              style={{ height: 40, width: 40, borderRadius: 30, marginTop: 20, marginLeft: width * 0.77 }}
            />
          </View>
          <View style={styles.containerImage}>
            <Image
              source={require("../images/logo1.png")}
              style={styles.stretch}
            />
          </View>
          <View style={styles.containerBtn}>
            <Button
              onPress={() => navigate(
                'Player')}
              labelStyle={styles.titleStyle}
              style={styles.buttonStyle}
              type="outline">
              Create Game
            </Button>
            <Button
              onPress={() => navigate(
                'Join_Game')}
              labelStyle={styles.titleStyle}
              style={styles.buttonStyle}
              type="outline">
              Join Game
            </Button>

            <Text style={styles.titleText} >
              How To Play?
          </Text>
          </View>


        </ImageBackground>
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignContent: 'center',
       
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  containerImage: {
    flex: 2,
    alignItems: "center",
  },
  stretch: {
    height: height * 0.33,
    width: width * 0.55,
    backgroundColor: "#fff",
    borderRadius: 200,
  },

  containerBtn: {
    flex: 3,
    marginTop: height * 0.1
  },
  buttonStyle: {
    borderRadius: 40, 
    backgroundColor: "#fff", 
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.06
  },
  titleStyle: {
    fontSize: height * 0.035,
    color: "#4b3ca7",
  },

  titleText: {
    textAlign: "center",
    fontSize: height * 0.035,
    color: "#b1a7b9",
    marginTop: height * 0.055,

  }

});