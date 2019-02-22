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
import { Linking } from "react-native";
import { white } from "ansi-colors";

export default class Themes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [],
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
      title: "Themes",
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
      .collection("themes")
      .doc("themeData")
      .collection("themeList");

    await dbRef.get().then(async querySnapshot => {
      await querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            themes: [...prevState.themes, { id: doc.id, ...doc.data() }]
          }));
        }
      });
    });
    this.setState({
      isLoading: false
    });
  }

  _renderContent(item) {
    return item.body.map((data, index) => (
      <Hyperlink
        key={index}
        //    onPress={Linking.openURL}
        linkDefault={true}
        linkStyle={{ color: "#2980b9" }}
      >
        <Text
          style={{
            padding: 10,
            fontStyle: "italic"
          }}
          key={index}
        >
          {data}
        </Text>
      </Hyperlink>
    ));
  }

  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center"
          // borderRadius: 4,
          // borderBottomWidth: 0.5,
          // borderColor: "black"
        }}
      >
        <Text style={{ fontWeight: "500" }}>
          {" "}
          Theme {item.id}: {item.title}
        </Text>
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
            dataArray={this.state.themes}
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
