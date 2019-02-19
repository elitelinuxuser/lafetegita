import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import firebase from "react-native-firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Categories from "./Categories";
import Card from "../components/Card";
import AboutUs from "./AboutUs";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class Home extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("events");
    this.state = {
      activeTab: {
        key: "home",
        icon: "home",
        label: "Home",
        barColor: "#388E3C",
        pressColor: "rgba(255, 255, 255, 0.16)"
      },
      value: "none"
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        flex: 1,
        alignSelf: "center",
        textAlign: "center",
        color: "white"
      },
      title: navigation.getParam("label", "Home"),
      // headerLeft: (
      //   <Icon
      //     size={32}
      //     color="white"
      //     name={navigation.getParam("icon", "home")}
      //   />
      // ),
      // headerRight: <View />,
      headerStyle: {
        backgroundColor: navigation.getParam("headerColor", "#388E3C")
      }
    };
  };

  tabs = [
    {
      key: "home",
      icon: "home",
      label: "Home",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "category",
      icon: "view-carousel",
      label: "Categories",
      barColor: "#B71C1C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "reference",
      icon: "group",
      label: "Reference",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "about",
      icon: "live-help",
      label: "About Us",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)"
    }
  ];

  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key, headerColor: newTab.barColor });
  };

  componentDidMount() {
    dbRef = this.ref.doc("categories").collection("art");
    console.log("Home executed");

    dbRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.exists) {
          this.setState({
            value: doc.data().name
          });
        }
      });
    });
  }

  renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
    );
  };

  renderIcon = iconName => ({ isActive }) => {
    return <Icon size={24} color="white" name={iconName} />;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {this.state.activeTab.key === "about" && (
            // <Card barColor={this.state.activeTab.barColor} />
            <AboutUs />
          )}
        </View>
        <BottomNavigation
          onTabPress={newTab => {
            this.setState({
              activeTab: newTab
            });
            this.props.navigation.setParams({
              headerColor: newTab.barColor,
              icon: newTab.icon,
              label: newTab.label
            });
          }}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
    Home: Home,
    Categories: Categories
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#388E3C"
      }
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
