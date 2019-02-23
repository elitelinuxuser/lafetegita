import React, { Component } from "react";
import { Linking } from "react-native";
// import { StyleSheet } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon
} from "native-base";
import { human } from "react-native-typography";

export default class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.listData;
  }
  handlePress = (title, navigateTo) => {
    this.setState({
      selected: title
    });
    if (title === "Download") {
      Linking.canOpenURL(
        "https://drive.google.com/open?id=1qOMvxBpcZytYHvqgVpm21nsQ230P5FWj"
      ).then(supported => {
        if (supported) {
          Linking.openURL(
            "https://drive.google.com/open?id=1qOMvxBpcZytYHvqgVpm21nsQ230P5FWj"
          );
        } else {
          console.log("Don't know how to open URI: ");
        }
      });
    } else if (title === "Upload") {
      Linking.canOpenURL("https://lafetegita.com/upload/").then(supported => {
        if (supported) {
          Linking.openURL("https://lafetegita.com/upload/");
        } else {
          console.log("Don't know how to open URI: ");
        }
      });
    } else if (title === "Music Library") {
      Linking.canOpenURL(
        "https://drive.google.com/drive/folders/1syfAY3iW8fMQcSkv0D6mzGxp8MAk8Gbs"
      ).then(supported => {
        if (supported) {
          Linking.openURL(
            "https://drive.google.com/drive/folders/1syfAY3iW8fMQcSkv0D6mzGxp8MAk8Gbs"
          );
        } else {
          console.log("Don't know how to open URI: ");
        }
      });
    } else {
      return this.props.navigation.navigate(navigateTo);
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.listArray.map(({ title, navigateTo }, index) => (
              <ListItem
                noIndent
                key={index}
                button
                selected={this.state.selected === title}
                onPress={() => this.handlePress(title, navigateTo)}
              >
                <Left>
                  <Text style={human.body}>{title}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
