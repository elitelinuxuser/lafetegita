import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const icon = <FontAwesome5 name={"paint-brush"} />;

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

export default () => {
  return (
    <View>
      {list.map((item, i) => (
        <ListItem key={i} title={item.title} leftIcon={{ name: item.icon }} />
      ))}
    </View>
  );
};
