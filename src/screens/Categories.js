import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Categories extends Component {
  static navigationOptions = {
    headerTitleStyle: {
      flex: 1,
      alignSelf: "center",
      textAlign: "center",
      color: "white"
    },
    title: "Home",
    headerLeft: <Icon size={32} color="white" name="home" />,
    headerRight: <View />
  };

  render() {
    return (
      <View>
        <Text>Categories</Text>
      </View>
    );
  }
}
