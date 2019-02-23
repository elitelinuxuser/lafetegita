import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Linking
} from "react-native";
import { Container, Content, Button } from "native-base";
import { human } from "react-native-typography";

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

const imageArray = [
  {
    title: "Tax exemption under 80-G",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/no-tax-1.png"
  },
  {
    title: "Special seating for 2 members at Grand Finale",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/seat.png"
  },
  {
    title: "Iskcon's matchless gifts",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/gift.png"
  },
  {
    title: "Special archana seva",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/archana.png"
  },
  {
    title: "Delightful dinner prasadam",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/01/food-1.png"
  }
];

const donorPass = [
  {
    title: "Gold Donor Pass",
    cost: "₹5000",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/gold-1.png",
    clickUrl: "https://lafetegita.com/donate/?amount=5000",
    honors: [
      "Special seating for 2 in the Grand Finale",
      "Archana for the sponsors family",
      "Dinner for 2 after the Event",
      "Special takeaways"
    ]
  },
  {
    title: "Platinum Donor Pass",
    cost: "₹25000",
    imageUrl: "https://lafetegita.com/wp-content/uploads/2019/02/platinum.png",
    clickUrl: "https://lafetegita.com/donate/?amount=25000",
    honors: [
      "Special seating for 6 in the Grand Finale",
      "Archana for the sponsors family",
      "Dinner for 6 after the Event",
      "Special takeaways"
    ]
  }
];

export default class Donate extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: "Donate",
      headerTintColor: "#ffffff",
      headerRight: <View />,
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#E64A19")
      }
    };
  };

  handlePress = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Image
            style={[
              styles.image,
              { width: win.width / 2, height: win.height / 6 }
            ]}
            resizeMode={"contain"}
            source={{
              uri:
                "https://lafetegita.com/wp-content/uploads/2019/01/ISKCON-Bangalore.png"
            }}
          />
          <Text
            style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
          >
            Giving Options
          </Text>
          <Text style={styles.desc}>
            ISKCON Bangalore is organizing a mega cultural event LA FETE GITA
            from 22nd to 24th February to promote Indian culture and heritage
            among youngsters with Bhagwad Gita as this year’s central theme.
          </Text>
          <Text style={styles.desc}>
            We have come a long way, in conducting this mega cultural fest but
            we still need your support. Your generous contribution will help us
            extend our purpose of reaching out to at least 1,500,000 youngsters
            with the message of Gita.
          </Text>
          <Image
            style={[styles.image, { height: win.height / 3 }]}
            resizeMode={"contain"}
            source={{
              uri: "https://lafetegita.com/wp-content/uploads/2019/02/donor.png"
            }}
          />
          <Image
            style={[
              styles.image,
              {
                height: win.height / 10
              }
            ]}
            resizeMode={"contain"}
            source={{
              uri:
                "https://lafetegita.com/wp-content/uploads/2019/02/Untitled-1.jpg"
            }}
          />
          <Text
            style={[styles.textcenter, human.largeTitle, { marginTop: 20 }]}
          >
            Individual Donations
          </Text>
          <Text style={styles.desc}>
            Every donation above ₹10,000 will be recognised and honoured with
            privileged seating for four members in the finale of La fete Gita
            Event on 24th February 2019.
          </Text>
          {imageArray.map(({ title, imageUrl }, index) => (
            <View
              key={index}
              style={{
                flex: 1,
                borderTopWidth: 0.5,
                borderTopColor: "black",
                marginTop: 10
              }}
            >
              <Image
                style={[
                  styles.image,
                  {
                    height: win.height / 3
                  }
                ]}
                resizeMode={"contain"}
                source={{
                  uri: imageUrl
                }}
              />
              <Text style={[styles.desc, styles.textcenter]}>{title}</Text>
            </View>
          ))}
          {donorPass.map(
            ({ title, imageUrl, honors, cost, clickUrl }, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  borderTopWidth: 0.5,
                  borderTopColor: "black",
                  marginTop: 10
                }}
              >
                <Image
                  style={[
                    styles.image,
                    {
                      height: win.height / 7
                    }
                  ]}
                  resizeMode={"contain"}
                  source={{
                    uri: imageUrl
                  }}
                />
                <Text style={[styles.desc, styles.textcenter, human.title1]}>
                  {title}
                </Text>
                <Text style={[styles.desc, styles.textcenter, human.title2]}>
                  {cost}
                </Text>
                <Text style={[styles.desc, styles.textcenter, human.title3]}>
                  Honors
                </Text>
                {honors.map((body, index) => (
                  <Text key={index} style={[styles.desc, human.body]}>
                    {body}
                  </Text>
                ))}
                <Button
                  style={[
                    { backgroundColor: "#E02B20", borderRadius: 4, margin: 20 },
                    styles.textcenter
                  ]}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", padding: 20 }}
                    onPress={() => this.handlePress(clickUrl)}
                  >
                    DONATE NOW
                  </Text>
                </Button>
              </View>
            )
          )}
        </Content>
      </Container>
    );
  }
}
