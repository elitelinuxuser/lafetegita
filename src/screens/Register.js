import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Text,
  View,
  Spinner
} from "native-base";
import firebase from "react-native-firebase";
import Hyperlink from "react-native-hyperlink";
import { human } from "react-native-typography";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: [],
      isLoading: true
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: "Registration",
      headerTintColor: "#ffffff",
      headerRight: <View />,
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#E64A19")
      }
    };
  };

  async componentDidMount() {
    console.log("About Us Mounted");

    //Firestore reference to the required document
    dbRef = firebase
      .firestore()
      .collection("register")
      .doc("registerData")
      .collection("registerList");

    await dbRef.get().then(async querySnapshot => {
      await querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            register: [...prevState.register, doc.data()]
          }));
        }
      });
    });
    this.setState({
      isLoading: false
    });
  }

  _renderContent(item) {
    return (
      <View>
        <Text
          style={{
            padding: 10,
            ...human.title3
          }}
        >
          {item.cost}
        </Text>

        {item.body.map((data, index) => (
          <Text
            style={{
              padding: 10,
              fontStyle: "italic"
            }}
            key={index}
          >
            {data}
          </Text>
        ))}
      </View>
    );
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ fontWeight: "500" }}>{item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="ios-arrow-up" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="ios-arrow-down" />
        )}
      </View>
    );
  }

  render() {
    return this.state.isLoading ? (
      <Spinner color="#E64A19" />
    ) : (
      <Container>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion
            dataArray={this.state.register}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
