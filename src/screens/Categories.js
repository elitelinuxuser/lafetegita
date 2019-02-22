import React, { Component } from "react";
import MainList from "../components/MainList";

// const styles = StyleSheet.create({
//   ListItem: {
//     color: "blue"
//   }
// });
const listData = {
  listArray: [
    { title: "Prizes", navigateTo: "Home" },
    { title: "Events", navigateTo: "Events" },
    { title: "Schedule", navigateTo: "Categories" },
    { title: "Registration", navigateTo: "Categories" },
    { title: "Donate", navigateTo: "Categories" }
  ],
  selected: "None"
};

export default props => {
  return <MainList listData={listData} navigation={props.navigation} />;
};
