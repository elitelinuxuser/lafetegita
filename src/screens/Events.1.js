import React, { Component } from "react";
import { Text, View } from "react-native";
import EventList from "../components/EventList";

export default class Events extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: "Events",
      headerTintColor: "#ffffff",
      headerRight: <View />,
      // headerLeft: (
      //   <Icon
      //     size={32}
      //     color="white"
      //     name={navigation.getParam("icon", "home")}
      //   />
      // ),
      headerStyle: {
        backgroundColor: "#B71C1C"
      }
    };
  };
  render() {
    return <EventList {...this.props} />;
  }
}
