import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class More extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text>More Page</Text>
      </View>
    );
  }
}

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});