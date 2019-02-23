import React from "react";
// import {
//   StyleSheet,
//   Platform,
//   Image,
//   Text,
//   View,
//   ScrollView
// } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import Home from "./Home";
import DisplayEvents from "./DisplayEvents";
import EventList from "../components/EventList";

// import firebase from "react-native-firebase";

const eventsArray = [
  "art",
  "hackathon",
  "cultural",
  "digitalArts",
  "literary",
  "onlineevents"
];

class Prizes extends React.Component {
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
    // // this.props.fetch();
    await eventsArray.map(async eventTitle => {
      await fetchEvents(eventTitle);
    });
    // await fetchEvents("hackathon");
    console.log("App executed");
  }

  render() {
    console.log(this.props.events.data.hackathon);
    const {
      art,
      hackathon,
      cultural,
      digitalArts,
      literary,
      onlineevents
    } = this.props.events.data;
    return <EventList />;
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
)(Prizes);
