import { GET_SCORE_DATA, GET_USERS, SET_LOADING, GET_USER, REMOVE_USER, UPDATED } from "./Types";
const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_SCORE_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UPDATED:
      return {
        ...state,
        updated: Math.floor((Math.random() * 100) + 1),
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        loggedInUser: action.payload[0],
        loading: false,
      };
    case REMOVE_USER:
      return {
        ...state,
        loggedInUser: {},
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default AppReducer;
