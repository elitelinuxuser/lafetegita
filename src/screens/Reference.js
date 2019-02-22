import React from "react";
import MainList from "../components/MainList";

const listData = {
  listArray: [
    { title: "Music Library", navigateTo: "Home" },
    { title: "Themes", navigateTo: "Themes" },
    { title: "Join Us", navigateTo: "JoinUs" },
    { title: "Upload", navigateTo: "Categories" },
    { title: "Download", navigateTo: "Categories" },
    { title: "Contact Us", navigateTo: "ContactUs" }
  ],
  selected: "None"
};

export default props => {
  return <MainList listData={listData} navigation={props.navigation} />;
};
