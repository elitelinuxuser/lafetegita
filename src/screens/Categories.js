import React, { Component } from "react";
import MainList from "../components/MainList";

// const styles = StyleSheet.create({
//   ListItem: {
//     color: "blue"
//   }
// });
const listData = {
  listArray: [
    // { title: "Prizes", navigateTo: "Prizes" },
    { title: "Events", navigateTo: "Events" },
    { title: "Schedule", navigateTo: "Schedule" },
    { title: "Registration", navigateTo: "Register" },
    { title: "Donate", navigateTo: "Donate" }
  ],
  selected: "None"
};

export default props => {
  return <MainList listData={listData} navigation={props.navigation} />;
};
