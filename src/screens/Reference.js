import React from "react";
import MainList from "../components/MainList";

const listData = {
  listArray: [
    { title: "Music Library", navigateTo: "Reference" },
    { title: "Themes", navigateTo: "Themes" },
    { title: "Join Us", navigateTo: "JoinUs" },
    { title: "Upload", navigateTo: "Reference" },
    { title: "Download", navigateTo: "Reference" },
    { title: "Contact Us", navigateTo: "ContactUs" }
  ],
  selected: "None"
};

export default props => {
  return <MainList listData={listData} navigation={props.navigation} />;
};
