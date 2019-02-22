import React, { Component } from "react";
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
