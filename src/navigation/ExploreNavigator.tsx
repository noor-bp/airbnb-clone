import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchResultPage from "../screens/SearchResultPage";
import HomePage from "../screens/HomePage";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const ExploreNavigator: React.FC = () => {
  const Stack = createStackNavigator();
  // const Tab = createBottomTabNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home"}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsTabNavigator}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
