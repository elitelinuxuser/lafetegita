import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
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

class ExpandedEvent extends Component {
  componentDidMount() {
    console.log("Expanded");
    console.log(this.props.navigation.state);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: navigation.getParam("headTitle", "No Title"),
      headerTintColor: "#ffffff",
      //   headerRight: <View />,
      headerRight: (
        <Icon
          style={{ marginRight: 10 }}
          size={32}
          color="white"
          name={navigation.getParam("headIcon", "home")}
        />
      ),
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#B71C1C")
      }
    };
  };

  render() {
    const {
      title,
      url,
      guidelines,
      prizes,
      coordinator,
      shortdesc
    } = this.props.navigation.state.params.data;
    return (
      <Container>
        <Content>
          <Text style={[styles.textcenter, human.title1, { marginTop: 20 }]}>
            {title}
          </Text>
          <Text style={[styles.desc]}>{shortdesc}</Text>
          <Image
            style={[styles.image, { height: win.height / 3 }]}
            resizeMode={"contain"}
            source={{
              uri: url
            }}
          />
          <View
            style={{ flex: 1, borderTopColor: "black", borderTopWidth: 0.3 }}
          >
            <Text style={[styles.textcenter, human.title1, { padding: 10 }]}>
              Guidelines
            </Text>

            <Text
              style={[styles.textcenter, human.subhead, { paddingBottom: 10 }]}
            >
              Team size: {"  "}
              {guidelines[0]}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderTopColor: "black",
              borderTopWidth: 0.3,
              paddingBottom: 15
            }}
          >
            {guidelines.map((item, index) => {
              if (index != 0)
                return (
                  <Text style={styles.desc} key={index}>
                    {item}
                  </Text>
                );
            })}
          </View>
          <View
            style={{
              flex: 1,
              borderTopColor: "black",
              borderTopWidth: 0.3,
              borderBottomColor: "black",
              borderBottomWidth: 0.3
            }}
          >
            <Text style={[styles.textcenter, human.title1, { paddingTop: 15 }]}>
              Event Coordinator
            </Text>
            <Text style={[styles.textcenter, human.title3, { paddingTop: 5 }]}>
              We are here to help.
            </Text>
            <Text
              style={[
                styles.textcenter,
                human.subhead,
                { paddingTop: 5, paddingBottom: 15 }
              ]}
            >
              In case of any queries regarding the event please contact the
              event coordinator
            </Text>
          </View>
          <Text style={[styles.desc, styles.textcenter, { padding: 10 }]}>
            Name: {coordinator[0]}
          </Text>
          <Text style={[styles.desc, styles.textcenter, { padding: 10 }]}>
            Mobile: {coordinator[1]}
          </Text>
          <Text
            style={[
              styles.desc,
              styles.textcenter,
              { padding: 10, marginBottom: 10 }
            ]}
          >
            Email: {coordinator[2]}
          </Text>
          <View
            style={{
              flex: 1,
              borderTopColor: "black",
              borderTopWidth: 0.3,
              borderBottomColor: "black",
              borderBottomWidth: 0.3
            }}
          >
            <Text
              style={[
                styles.textcenter,
                human.title1,
                {
                  padding: 15
                }
              ]}
            >
              Prizes
            </Text>
          </View>
          <View style={{ flex: 1, marginBottom: 20 }}>
            {prizes.map((prize, index) => {
              return (
                <Text
                  key={index}
                  style={[styles.desc, styles.textcenter, { padding: 10 }]}
                >
                  Prize {index + 1}: {typeof prize === "number" && "₹"} {prize}
                  {console.log(typeof prize)}
                </Text>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}

export default ExpandedEvent;
