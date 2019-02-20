import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import * as actions from "./src/actions";
import Home from "./src/screens/Home";

// import firebase from "react-native-firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    console.log("App log");
    const { fetchEvents } = this.props;
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());
    // await firebase.analytics().logEvent('foo', { bar: '123'});
    // this.props.fetch();
    await fetchEvents("art");
    console.log("App executed");
    setTimeout(() => {
      console.log(this.props.events);
    }, 5000);
  }

  render() {
    return <Home />;
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
)(App);
