import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import Icon from "react-native-vector-icons/MaterialIcons";
import EventCard from "../components/EventCard";
import { Container, Content, Spinner } from "native-base";
// import Card from "../components/Card";

class DisplayEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
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
  async componentDidMount() {
    console.log("DisplayEvents");
    const { fetchEvents } = this.props;
    await fetchEvents(this.props.navigation.state.params.collectionName);
    this.setState({
      isLoading: false
    });
    // console.log(this.props.events.data.hackathon);
    console.log(this.props.navigation.state.params.collectionName);
  }
  render() {
    const { data } = this.props.events;
    const { collectionName } = this.props.navigation.state.params;
    const eventRef = data[collectionName];
    console.log(eventRef);
    return this.state.isLoading ? (
      <Spinner color="red" />
    ) : (
      <View style={{ flex: 1 }}>
        <Container style={styles.container}>
          <Content>
            {eventRef.map((events, index) => {
              return (
                <EventCard
                  key={index}
                  data={events}
                  navigation={this.props.navigation}
                />
              );
            })}
          </Content>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  },
  h1: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "500"
  }
});

const mapStateToProps = state => {
  console.log("mapStateTOProps");
  console.log(state);
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  actions
)(DisplayEvents);
