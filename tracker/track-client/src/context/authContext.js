import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "../api/axios";

const authReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "signup":
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await axios.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (error) {
      dispatch({ type: "error", payload: error.response.data.error });
    }
  };
};
const signin = (dispatch) => {
  return async ({ email, password }) => {};
};

const signout = (dispatch) => {
  return async () => {};
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  {
    token: null,
    errorMessage: "",
  }
);
