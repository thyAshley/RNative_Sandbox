import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const colorIncrement = 12;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return {
        ...state,
        red: state.red + action.payload,
      };
    case "green":
      return {
        ...state,
        green: state.green + action.payload,
      };
    case "blue":
      return {
        ...state,
        blue: state.blue + action.payload,
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorAdjuster
        userColor="Red"
        onIncrease={() => dispatch({ type: "red", payload: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * colorIncrement })
        }
        value={red}
      />
      <ColorAdjuster
        userColor="Green"
        onIncrease={() => dispatch({ type: "green", payload: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * colorIncrement })
        }
        value={green}
      />
      <ColorAdjuster
        userColor="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * colorIncrement })
        }
        value={blue}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
