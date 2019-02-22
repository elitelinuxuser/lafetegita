import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class ExpandedEvent extends Component {
  componentDidMount() {
    console.log("Expanded");
    console.log(this.props.navigation.state);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: navigation.getParam("headTitle", "No Title"),
      headerTintColor: "#ffffff",
      //   headerRight: <View />,
      headerRight: (
        <Icon
          style={{ marginRight: 10 }}
          size={32}
          color="white"
          name={navigation.getParam("headIcon", "home")}
        />
      ),
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#B71C1C")
      }
    };
  };

  render() {
    const {
      title,
      url,
      guidelines,
      prizes,
      coordinator,
      shortdesc
    } = this.props.navigation.state.params.data;
    return <Text>{title}</Text>;
  }
}

export default ExpandedEvent;
