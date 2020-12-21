import 'react-native-gesture-handler';
// Libs
import React from 'react';
// import { View, Text, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';

//library imports 
// import { Container, Content, Icon, Header, Body } from 'native-base'
// import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'


// import { createDrawerNavigator } from '@react-navigation/drawer';
//redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
const store = ConfigureStore();


// Components
import Home from './screens/Home';
import New_Join_Game from './screens/New_Join_Game';
import Join_Game from './screens/Join_Game';
import New_Game from './screens/New_Game';
import More from './screens/More';
import Player from './screens/Player';
import Play_Game from './screens/Play_Game';
import Rank_Game from './screens/Rank_Game';
import Countdown_StartPlay from './screens/CountDown_StartPlay';
import Creating_Game from './screens/Creating_Game';
import Modal_Leave_Room from './Components/Player/Modal_Leave_Room';
import Waiting_Rank from './screens/Waiting_Rank';
// import MenuButton from './Components/MenuButton';
// import LoginPage from './screen/LoginPage';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/


// const stackNavigatorOptions = {
//   headerShown : false
// }
// const Navigator = createStackNavigator({
//   // LoginPage:{ screen:LoginPage},
//     Home: { screen:Home },
//     New_Join_Game: { screen:New_Join_Game },
//     Join_Game:{screen:Join_Game},
//     New_Game: {screen:New_Game},
//     Player: { screen:Player },
//     More: { screen:More },
//     Play_Game: { screen:Play_Game },
// },
// {
//   defaultNavigationOptions:stackNavigatorOptions
// }
// );

const StackNavigator = createStackNavigator();
function StackNavigatorScreen() {
  return (
    <StackNavigator.Navigator
      headerMode='false'
      initialRouteName='Home'>
      <StackNavigator.Screen name='Home' component={Home} />
      <StackNavigator.Screen name='New_Join_Game' component={New_Join_Game} />
      <StackNavigator.Screen name='Join_Game' component={Join_Game} />
      <StackNavigator.Screen name='New_Game' component={New_Game} />
      <StackNavigator.Screen name="Player" component={Player} />
      <StackNavigator.Screen name='More' component={More} />
      <StackNavigator.Screen name='Play_Game' component={Play_Game} />
      <StackNavigator.Screen name='Rank_Game' component={Rank_Game} />
      <StackNavigator.Screen name='CountDown_StartPlay' component={Countdown_StartPlay} />
      <StackNavigator.Screen name='Creating_Game' component={Creating_Game}/>
      <StackNavigator.Screen name='Modal_Leave_Room' component={Modal_Leave_Room}/>
      <StackNavigator.Screen name='Waiting_Rank' component={Waiting_Rank}/>
      {/* <StackNavigator.Screen name='MenuButton' component={MenuButton}/> */}
    </StackNavigator.Navigator>
  );
}
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
// const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigatorScreen />
        </NavigationContainer>
      </Provider>
    )
  }
}