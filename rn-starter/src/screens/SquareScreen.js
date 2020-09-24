import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const colorIncrement = 12;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return {
        ...state,
        red: state.red + action.amount,
      };
    case "green":
      return {
        ...state,
        green: state.green + action.amount,
      };
    case "blue":
      return {
        ...state,
        blue: state.blue + action.amount,
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
        onIncrease={() => dispatch({ type: "red", amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "red", amount: -1 * colorIncrement })
        }
      />
      <ColorAdjuster
        userColor="Green"
        onIncrease={() => dispatch({ type: "green", amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "green", amount: -1 * colorIncrement })
        }
      />
      <ColorAdjuster
        userColor="Blue"
        onIncrease={() => dispatch({ type: "blue", amount: colorIncrement })}
        onDecrease={() =>
          dispatch({ type: "blue", amount: -1 * colorIncrement })
        }
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
