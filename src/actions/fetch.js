import { FETCH_EVENTS } from "./types";
import firebase from "react-native-firebase";

export const fetchEvents = eventTitle => async dispatch => {
  let dbRef = firebase
    .firestore()
    .collection("events")
    .doc("categories")
    .collection(eventTitle);

  let data = [];

  await dbRef.get().then(async querySnapshot => {
    await querySnapshot.forEach(doc => {
      console.log("Fetch Executed");
      console.log(doc.data());
      data.push({ docid: doc.id, docdata: doc.data() });
    });
  });

  console.log("Awaited" + data);
  dispatch({
    type: FETCH_EVENTS,
    payload: data
  });
};
