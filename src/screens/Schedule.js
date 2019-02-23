import React, { Component } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Container, Content, Button, Spinner } from "native-base";
import { human, material } from "react-native-typography";
import firebase from "react-native-firebase";

const styles = StyleSheet.create({
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  },
  buttonCenter: {
    alignSelf: "center",
    textAlign: "center"
  },
  buttonText: {
    // paddingLeft: 10,
    // paddingRight: 10,
    padding: 20,
    ...human.title3,
    color: "white"
  },
  h1: {
    marginTop: 10,
    marginBottom: 7,
    fontWeight: "500"
  },
  desc: {
    padding: 10,
    ...human.body
  }
});

const buttons = [
  {
    url:
      "https://lafetegita.com/wp-content/uploads/2019/02/LFG_19_Event_Sechedule.pdf",
    buttonColor: "#8300E9",
    buttonTitle: "DOWNLOAD SCHEDULE"
  },
  {
    url: "https://goo.gl/maps/QiQTMr53yZ82",
    buttonColor: "#06C8FF",
    buttonTitle: "LOCATE US"
  }
];

export default class Schedule extends Component {
  state = {
    schedule: [],
    isLoading: true,
    color: "#8300E9"
  };

  async componentDidMount() {
    //Firestore reference to the required document
    dbRef = firebase
      .firestore()
      .collection("schedule")
      .doc("scheduleData")
      .collection("scheduleList");

    //Fetch the data from all the documents in scheduleList collection
    await dbRef.get().then(async querySnapshot => {
      await querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            schedule: [...prevState.schedule, { id: doc.id, ...doc.data() }]
          }));
        }
      });
    });

    console.log(this.state);

    //Loading finished
    this.setState({
      isLoading: false
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: "Schedule",
      headerTintColor: "#ffffff",
      headerRight: <View />,
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#8300E9")
      }
    };
  };

  handlePress = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };
  render() {
    return this.state.isLoading ? (
      <Spinner color={this.state.color} />
    ) : (
      <Container>
        <Content>
          <Text
            style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
          >
            La fête Gita
          </Text>
          <Text style={[material.title, styles.textcenter]}>
            Feb 21-24, 2019 |ISKCON Bangalore, Karnataka, India
          </Text>

          {buttons.map(({ buttonTitle, buttonColor, url }, index) => (
            <Button
              key={index}
              style={[
                {
                  backgroundColor: buttonColor,
                  margin: 20,
                  marginBottom: 10,
                  marginTop: 10
                },
                styles.textcenter
              ]}
              rounded
            >
              <Text
                style={{ color: "white", fontWeight: "500", padding: 20 }}
                onPress={() => this.handlePress(url)}
              >
                {buttonTitle}
              </Text>
            </Button>
          ))}
          {this.state.schedule.map((topItem, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                marginTop: 10,
                borderTopWidth: 0.4,
                borderTopColor: "black"
              }}
            >
              <Text
                style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
              >
                {topItem.id}
              </Text>
              {topItem.data.map(
                ({ timing, title, desc, coordinator }, index) => (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      marginTop: 10,
                      borderTopWidth: 0.4,
                      borderTopColor: "black",
                      paddingTop: 15
                    }}
                  >
                    <Text style={[human.title1, styles.textcenter]}>
                      {timing}
                    </Text>
                    <Text
                      style={[
                        human.title1,
                        styles.textcenter,
                        { color: "#8300E9" }
                      ]}
                    >
                      {title}
                    </Text>
                    <Text style={styles.desc}>{desc}</Text>
                    <Text style={[human.title1, styles.textcenter]}>
                      Coordinator
                    </Text>
                    <Text style={[human.title3, styles.textcenter]}>
                      {coordinator.name}
                    </Text>
                    <Text
                      style={[styles.desc, styles.textcenter, { padding: 5 }]}
                    >
                      {coordinator.position}
                    </Text>
                    <Text
                      style={[styles.desc, styles.textcenter, { padding: 5 }]}
                    >
                      Mobile: {coordinator.phone}
                    </Text>
                  </View>
                )
              )}
            </View>
          ))}
        </Content>
      </Container>
    );
  }
}
