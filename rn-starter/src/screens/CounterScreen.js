import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  return (
    <View>
      <Text>Current Count: {count}</Text>
      <Button
        onPress={() => dispatch({ type: "increment", payload: 1 })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
        title="Decrease"
        disabled={count === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
