import React from "react";
import MainList from "../components/MainList";

const listData = {
  listArray: [
    { title: "Music Library", navigateTo: "Home" },
    { title: "Themes", navigateTo: "Events" },
    { title: "Join Us", navigateTo: "Categories" },
    { title: "Upload", navigateTo: "Categories" },
    { title: "Download", navigateTo: "Categories" },
    { title: "Contact Us", navigateTo: "Categories" }
  ],
  selected: "None"
};

export default props => {
  return <MainList listData={listData} navigation={props.navigation} />;
};
