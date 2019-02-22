import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Art",
    icon: "color-lens",
    firebaseCollection: "art"
  },
  {
    title: "Cultural",
    icon: "business",
    firebaseCollection: "cultural"
  },
  {
    title: "Digital Arts",
    icon: "brush",
    firebaseCollection: "digitalarts"
  },
  {
    title: "Hackathon",
    icon: "laptop",
    firebaseCollection: "hackathon"
  },
  {
    title: "Literary",
    icon: "border-color",
    firebaseCollection: "literary"
  },
  {
    title: "Online Events",
    icon: "web",
    firebaseCollection: "onlineevents"
  }
];

export default class EventList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {list.map(({ title, icon, firebaseCollection }, i) => (
          <ListItem
            key={i}
            title={title}
            leftIcon={{ name: icon }}
            rightIcon={{ name: "chevron-right" }}
            onPress={() =>
              this.props.navigation.navigate("DisplayEvents", {
                headTitle: title,
                headIcon: icon,
                collectionName: firebaseCollection
              })
            }
          />
        ))}
      </View>
    );
  }
}
