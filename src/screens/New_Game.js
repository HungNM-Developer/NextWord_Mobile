// import React, {Component} from 'react';
// import {View, StyleSheet, Text, Alert, Modal, Image, ImageBackground } from 'react-native';
// import MainScreenNavigator from '../config/router';

// // import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import { IconButton, Colors, Button } from 'react-native-paper';

// class New_Game extends Component {
//   state = {};
//   render() {
//     return (
//       <View style={styles.container}>
        
//         <MainScreenNavigator />
        
//       </View>
//     );
//   }
// }

// export default New_Game;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });



import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
import CustomHeader from '../Components/CustomHeader'

class New_Game extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Notification',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/logo-small.png')}
        style={styles.icon}
      />
    ),
  })


  render() {
    return (

      <Container>

        <CustomHeader title="New_Game" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Rank_Game')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default New_Game;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});