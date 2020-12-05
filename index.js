/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import App from './src/screens/Home';
// import {name as appName} from './app.json';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';





const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Lato-Black',
      fontWeight: 'bold',
    },
    medium: {
      fontFamily: 'Lato-Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Lato-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Lato-Thin',
      fontWeight: 'normal',
    },
  },
};

export default function Main() {
  return (
    <PaperProvider>
        <App />
    </PaperProvider>

  );
}

AppRegistry.registerComponent(appName, () => App);


