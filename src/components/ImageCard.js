import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Card, CardItem, Left, Text, Body } from "native-base";

const styles = StyleSheet.create({
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  render() {
    const { title, imageurl, body } = this.props.data;
    return (
      <Card style={{ flex: 1 }}>
        <CardItem header>
          {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
          <Text style={styles.textcenter}>{title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Image
              source={{ uri: imageurl }}
              style={{
                height: 200,
                width: Dimensions.get("window").width,
                flex: 1,
                marginBottom: 10
              }}
            />
            <Text>
              {"      "}
              {body}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
