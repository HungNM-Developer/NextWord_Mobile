// Libs
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import Home from './screens/Home';
import New_Join_Game from './screens/New_Join_Game';
import Join_Game from './screens/Join_Game';
import New_Game from './screens/New_Game';
import More from './screens/More';


/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="New_Game"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="New_Game"
        component={New_Game}
        options={{ tabBarLabel: 'New_Game' }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ tabBarLabel: 'More' }}
      />
      
    </Tab.Navigator>
  );
}
const stackNavigatorOptions = {
  headerShown : false
}
const Navigator = createStackNavigator({
    Home: { screen: Home },
    New_Join_Game: { screen: New_Join_Game },
    Join_Game:{screen:Join_Game},
    New_Game: {screen:New_Game},
    More: { screen:More },
},
{
  defaultNavigationOptions:stackNavigatorOptions
}
);

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

export default App;