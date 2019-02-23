import React, { Component } from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { Container, Content, H1, Button, Spinner } from "native-base";
import firebase from "react-native-firebase";
import { human, material, systemWeights } from "react-native-typography";

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
    padding: 20,
    ...human.body
  }
});

export default class JoinUs extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: "Join Us",
      headerTintColor: "#ffffff",
      headerRight: <View />,
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#E64A19")
      }
    };
  };
  state = {
    joinus: [],
    isLoading: true
  };
  async componentDidMount() {
    dbRef = firebase
      .firestore()
      .collection("joinus")
      .doc("joinData")
      .collection("joinCollection");

    await dbRef.get().then(async querySnapshot => {
      await querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            joinus: [...prevState.joinus, doc.data()]
          }));
        }
      });
    });
    this.setState({
      isLoading: false
    });
  }

  handleClick = buttonTitle => {
    if (buttonTitle === "EXPLORE EVENTS") {
      return this.props.navigation.navigate("Events");
    } else if (buttonTitle === "DONATE") {
      return this.props.navigation.navigate("Donate");
    } else {
      Linking.canOpenURL("https://lafetegita.com/volunteer/").then(
        supported => {
          if (supported) {
            Linking.openURL("https://lafetegita.com/volunteer/");
          } else {
            console.log("Don't know how to open URI: ");
          }
        }
      );
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Text
            style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
          >
            Join Us
          </Text>
          <Text
            style={[
              styles.desc,
              { borderBottomWidth: 0.5, borderBottomColor: "#222222" }
            ]}
          >
            La Fete Gita can only be possible by the contribution of volunteers,
            donors, and participants. Without your support, we can’t have an
            event in such a large scale. This is your chance to take a
            commitment and spread the divine words spoken by the Lord.
          </Text>
          <H1
            style={[
              styles.h1,
              styles.textcenter,
              {
                padding: 10
              }
            ]}
          >
            Getting Involved
          </H1>

          {this.state.isLoading ? (
            <Spinner color="red" />
          ) : (
            this.state.joinus.map(({ title, body, buttonTitle }, index) => (
              <View
                style={{
                  borderColor: "#222222",
                  borderWidth: 0.3,
                  flex: 1,
                  paddingTop: 8,
                  paddingBottom: 10
                }}
                key={index}
              >
                <Text style={[material.title, styles.textcenter]}>{title}</Text>
                <Text style={styles.desc}>{body}</Text>

                <Button
                  style={styles.buttonCenter}
                  rounded
                  primary
                  onPress={() => this.handleClick(buttonTitle)}
                >
                  <Text style={styles.buttonText}>{buttonTitle}</Text>
                </Button>
              </View>
            ))
          )}
        </Content>
      </Container>
    );
  }
}
