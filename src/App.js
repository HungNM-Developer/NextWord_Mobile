// Libs
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'


import { createDrawerNavigator } from '@react-navigation/drawer';



// Components
import Home from './screens/Home';
import New_Join_Game from './screens/New_Join_Game';
import Join_Game from './screens/Join_Game';
import New_Game from './screens/New_Game';
import More from './screens/More';
import Player from './screens/Player';
import Play_Game from './screens/Play_Game';
// import LoginPage from './screen/LoginPage';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/


const stackNavigatorOptions = {
  headerShown : false
}
const Navigator = createStackNavigator({
  // LoginPage:{ screen:LoginPage},
    Home: { screen: Home },
    New_Join_Game: { screen: New_Join_Game },
    Join_Game:{screen:Join_Game},
    New_Game: {screen:New_Game},
    Player: { screen:Player },
    More: { screen:More },
    Play_Game: { screen:Play_Game },
},
{
  defaultNavigationOptions:stackNavigatorOptions
}
);


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="New_Join_Game" component={New_Join_Game} />
//         <Drawer.Screen name="Join_Game" component={Join_Game} />
//         {/* <Drawer.Screen name="Home" component={Home} /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

export default App;