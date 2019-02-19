import React, { Component } from "react";
import firebase from "react-native-firebase";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import { Container, Content, H1 } from "native-base";

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  textcenter: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center"
  },
  h1: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "500"
  }
});

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specificTitles: [],
      associates: [],
      sponsors: []
    };
  }
  componentDidMount() {
    console.log("About Us Mounted");

    //Firestore reference to the required document
    dbRef = firebase
      .firestore()
      .collection("aboutus")
      .doc("HtZlTAbTyXUi2LRva5zw");

    //Firestore reference to the specificTitles collection
    specificTitles = dbRef.collection("specifictitles");

    //Firestore reference to the associates collection
    associates = dbRef.collection("associates");

    //Firestore reference to the sponsors collection
    sponsors = dbRef.collection("sponsors");

    //Fetch the data from all the documents in specificTitles collection
    specificTitles.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            specificTitles: [...prevState.specificTitles, doc.data()]
          }));
        }
      });
    });

    //Fetch the data from all the documents in associates collection
    associates.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            associates: [...prevState.associates, doc.data()]
          }));
        }
      });
    });

    //Fetch the data from all the documents in sponsors collection
    sponsors.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          this.setState(prevState => ({
            sponsors: [...prevState.sponsors, doc.data()]
          }));
        }
      });
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={styles.container}>
          <Content>
            {this.state.specificTitles.map((data, index) => {
              console.log("Mapping");
              return <Card key={index} data={data} />;
            })}
            <H1 style={[styles.textcenter, styles.h1]}>Our Associates</H1>
            {this.state.associates.map((associateData, index) => (
              <ImageCard key={index} data={associateData} />
            ))}
          </Content>
        </Container>
      </View>
    );
  }
}

export default AboutUs;
