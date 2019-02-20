import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import Icon from "react-native-vector-icons/MaterialIcons";
// import Card from "../components/Card";

class DisplayEvents extends Component {
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
  componentDidMount() {
    console.log("DisplayEvents");
    console.log(this.props);
  }
  render() {
    return <Text>Hi</Text>;
  }
}

const mapStateToProps = state => {
  console.log(state.events);
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  actions
)(DisplayEvents);
