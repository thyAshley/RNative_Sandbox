import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "../api/axios";
import { navigate } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "error":
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "authorize":
      return {
        ...state,
        token: action.payload,
        errorMessage: "",
      };
    case "clear":
      return {
        ...state,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const localSignin = (dispatch) => {
  return async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch({ type: "authorize", payload: token });
        navigate("track");
      } else {
        navigate("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await axios.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "authorize", payload: response.data.token });
      navigate("track");
    } catch (error) {
      dispatch({ type: "error", payload: error.response.data.error });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await axios.post("/signin", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "authorize", payload: response.data.token });
      navigate("track");
    } catch (error) {
      dispatch({ type: "error", payload: error.response.data.error });
    }
  };
};

const signOut = (dispatch) => {
  return async () => {};
};

const clearError = (dispatch) => {
  return () => dispatch({ type: "clear" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signOut, clearError, localSignin },
  {
    token: null,
    errorMessage: "",
  }
);
