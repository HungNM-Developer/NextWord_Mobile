import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert, Modal, Image, ImageBackground } from 'react-native';
import MainScreenNavigator from '../config/router';

// import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { IconButton, Colors, Button } from 'react-native-paper';

class New_Game extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        
        <MainScreenNavigator />
        
      </View>
    );
  }
}

export default New_Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});