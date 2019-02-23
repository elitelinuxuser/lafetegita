import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";
import { material, human } from "react-native-typography";

const styles = StyleSheet.create({
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default class RegisterCard extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  render() {
    const { title, imageurl, body } = this.props.data;
    return (
      <Card>
        <CardItem header>
          <Text style={[styles.textcenter, material.title]}>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            {body.map((text, index) => (
              <Text style={[{ marginBottom: 4 }, human.body]} key={index}>
                {"        "}
                {text}
              </Text>
            ))}
          </Body>
        </CardItem>
      </Card>
    );
  }
}
