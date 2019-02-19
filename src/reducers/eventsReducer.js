import { FETCH_EVENTS } from "../actions/types";

const initialState = {
  eventName: "",
  data: []
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        data: state.data.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
};

export default eventsReducer;
