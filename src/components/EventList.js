import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Art",
    icon: "color-lens"
  },
  {
    title: "Cultural",
    icon: "business"
  },
  {
    title: "Digital Arts",
    icon: "brush"
  },
  {
    title: "Hackathon",
    icon: "laptop"
  },
  {
    title: "Literary",
    icon: "border-color"
  },
  {
    title: "Online Events",
    icon: "web"
  }
];

export default class EventList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {list.map(({ title, icon }, i) => (
          <ListItem
            key={i}
            title={title}
            leftIcon={{ name: icon }}
            rightIcon={{ name: "chevron-right" }}
            onPress={() =>
              this.props.navigation.navigate("DisplayEvents", {
                headTitle: title,
                headIcon: icon
              })
            }
          />
        ))}
      </View>
    );
  }
}
