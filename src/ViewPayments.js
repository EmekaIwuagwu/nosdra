import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ViewPayments extends Component {
    static navigationOptions = {
        navigationOptions: {
          title: "View Payments",
        }
      };


  render() {
    return (
      <View>
        <Text> ViewPayments </Text>
      </View>
    );
  }
}

export default ViewPayments;
