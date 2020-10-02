import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";

function AppText({ children, style, ...others }) {
  return (
    <Text style={[defaultStyles.text, style]} {...others}>
      {children}
    </Text>
  );
}

export default AppText;
