import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Content, Item, Input } from "native-base";
import { human, material } from "react-native-typography";

const styles = StyleSheet.create({
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  },
  itemStyle: {
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 20,
    backgroundColor: "white"
  },
  heading: {
    padding: 15
  },
  humanFont: material.display1,
  inputFont: human.callout
});

export default class ContactUs extends Component {
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
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#388E3C"),
        borderBottomColor: "#388E3C"
      }
    };
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ backgroundColor: "#388E3C" }}>
          <Content style={{ padding: 20 }}>
            <Text style={[human.bodyWhite, styles.heading]}>
              Leave us a message, we will get in contact with you as soon as
              possible.
            </Text>
            <Item style={styles.itemStyle} rounded>
              <Input
                style={styles.inputFont}
                placeholder="Your Name"
                placeholderTextColor={styles.humanFont.color}
              />
            </Item>
            <Item style={styles.itemStyle} rounded>
              <Input
                style={styles.inputFont}
                placeholder="Your Email Address"
                placeholderTextColor={styles.humanFont.color}
              />
            </Item>
            <Item
              style={[
                styles.itemStyle,
                {
                  height: 150,
                  borderRadius: 10
                }
              ]}
            >
              <Input
                style={styles.inputFont}
                placeholder="What do you want to tell us about?"
                placeholderTextColor={styles.humanFont.color}
              />
            </Item>
          </Content>
        </Container>
      </View>
    );
  }
}
