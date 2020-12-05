import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class LoadingComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <ActivityIndicator size='large' color='gray' />
      </View>
    );
  }
}
export default LoadingComponent;