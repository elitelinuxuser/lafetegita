import React, { Component } from "react";
import { StyleSheet } from "react-native";
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

// const styles = StyleSheet.create({
//   ListItem: {
//     color: "blue"
//   }
// });

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      listArray: [
        { title: "Prizes", navigateTo: "Home" },
        { title: "Events", navigateTo: "Events" },
        { title: "Schedule", navigateTo: "Categories" },
        { title: "Registration", navigateTo: "Categories" },
        { title: "Donate", navigateTo: "Categories" }
      ],
      selected: "None"
    };
  }

  handlePress = (title, navigateTo) => {
    this.setState({
      selected: title
    });
    return this.props.navigation.navigate(navigateTo);
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
                  <Text>{title}</Text>
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
