import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
// import New_Game from '../screens/New_Game';
import More from '../screens/More';
import Player from '../screens/Player';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tabs = createMaterialTopTabNavigator(
  {
    Player: {
      screen: Player,
      navigationOptions: {
        tabBarLabel: ({tintColor}) => (
          <View style={styles.iconCOntainer}>
            <Icon name="ios-list" color={tintColor} size={22} />
            <Text style={{color: tintColor}}>Players</Text>
          </View>
        ),
      },
    },
    // More: {
    //   screen: More,
    //   navigationOptions: {
    //     tabBarLabel: ({tintColor}) => (
    //       <View style={styles.iconCOntainer}>
    //         <Icon name="ios-ellipsis-horizontal" color={tintColor} size={22} />
    //         <Text style={{color: tintColor}}>More</Text>
    //       </View>
    //     ),
    //   },
    // },
  },
  {
    initialRouteName: 'Player',
    lazyLoad: true,
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 70,
        backgroundColor: '#5454bd',
        paddingBottom: 3,
        paddingTop: 3,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
        elevation: 10,
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    },
  },
);

const MainScreenNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
    //   title: '',
      
    //   headerStyle: {
    //     backgroundColor: '#5454bd',
    //   },
    //   headerTitleStyle: {
    //     color: '#fff',
    //   },
    headerShown : false,
    },
  },
});

export default createAppContainer(MainScreenNavigator);

const styles = StyleSheet.create({
  iconCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});