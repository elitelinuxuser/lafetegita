import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { Card, CardItem, Text, Body, Thumbnail, Left } from "native-base";
import { material, human } from "react-native-typography";

const styles = StyleSheet.create({
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default class EventCard extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  handlePress = () => {
    return this.props.navigation.navigate("ExpandedEvent", {
      data: this.props.data.docdata,
      headTitle: this.props.navigation.state.params.headTitle,
      headIcon: this.props.navigation.state.params.headIcon
    });
  };

  render() {
    const { title, url, shortdesc } = this.props.data.docdata;
    return (
      <Card>
        <CardItem header style={styles.textcenter}>
          <Thumbnail style={{ marginRight: 15 }} source={{ uri: url }} />
          <Text>{title}</Text>
        </CardItem>
        {shortdesc != "n" && (
          <CardItem>
            <Body>
              {/* {shortdesc.map((text, index) => (
              <Text style={{ marginBottom: 4 }} key={index}>
                {"        "}
                {text}
              </Text>
            ))} */}

              <Text style={[{ marginBottom: 4 }, human.body]}>{shortdesc}</Text>
            </Body>
          </CardItem>
        )}

        <CardItem footer button onPress={this.handlePress}>
          <Text style={[styles.textcenter, { color: "#007AFF" }]}>
            Click here to know more!
          </Text>
        </CardItem>
      </Card>
    );
  }
}
