import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screen/ResultsShowScreen";

import SearchScreen from "./src/screen/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      cardStyle: { backgroundColor: "#fff" },
    },
  }
);

export default createAppContainer(navigator);
