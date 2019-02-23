import React, { Component } from "react";
import firebase from "react-native-firebase";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Linking
} from "react-native";
import { Container, Content, Button } from "native-base";
import { human, material } from "react-native-typography";

const win = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: "center",
    width: win.width,
    height: win.height,
    marginTop: 15
  },
  desc: {
    padding: 20,
    paddingBottom: 0,
    ...human.body
  },
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
  }
});

export default class HomePage extends Component {
  handleClick = () => {
    // Linking.canOpenURL("https://lafetegita.com/about/").then(supported => {
    //   if (supported) {
    //     Linking.openURL("https://lafetegita.com/about/");
    //   } else {
    //     console.log("Don't know how to open URI: ");
    //   }
    // });
    return this.props.navigation.navigate("AboutUs");
  };
  handlePress = () => {
    return this.props.navigation.navigate("Events");
  };
  render() {
    return (
      <Container>
        <Content>
          <Text
            style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
          >
            Mega Youth Cultural Fest
          </Text>
          <Text style={[material.title, styles.textcenter]}>La Fête Gita</Text>
          <Text style={[material.title, styles.textcenter]}>
            A platform for youth to re-discover their talent
          </Text>
          <Text style={[material.title, styles.textcenter]}>
            21- 24 February, 2019
          </Text>
          <Image
            style={[
              styles.image,
              {
                height: win.height / 3
              }
            ]}
            resizeMode={"contain"}
            source={{
              uri:
                "https://lafetegita.com/wp-content/uploads/2019/01/web-banner.jpg"
            }}
          />
          <Text style={styles.desc}>
            Be awesome! This February join the biggest happening in town
          </Text>
          <Text style={styles.desc}>
            In order to celebrate the real glories of India, a Mega Youth
            Cultural Fest ‘La fête Gita’ is organized from 22nd-24th February
            2019, in ISKCON Bangalore. Anyone aged between 18 & 30 from all
            corporate and educational institutions are invited to participate
            and cherish this grand event..
          </Text>
          <Text
            style={[
              styles.desc,
              styles.textcenter,
              {
                color: "#66BCF5"
              }
            ]}
            onPress={this.handleClick}
          >
            Read more...
          </Text>
          <Button
            // key={index}
            style={[
              {
                // backgroundColor: "#8300E9",
                backgroundColor: "#388E3C",
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
              onPress={() => this.handlePress()}
            >
              EXPLORE EVENTS
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
