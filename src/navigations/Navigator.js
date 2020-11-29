import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import New_Join_Game from '../screens/New_Join_Game';
import Join_Game from '../screens/Join_Game';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    New_Join_Game:{screen:New_Join_Game},
    Join_Game:{screen:Join_Game},
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)