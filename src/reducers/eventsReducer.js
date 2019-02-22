import { FETCH_EVENTS } from "../actions/types";

const initialState = {
  data: []
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        // data: state.data.concat(action.payload)
        data: { ...state.data, ...action.payload }
      };
    default:
      return state;
  }
};

export default eventsReducer;
