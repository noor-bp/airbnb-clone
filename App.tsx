import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { Appearance, useColorScheme } from "react-native";
import HomePage from "./src/screens/HomePage";
import PostPage from "./src/screens/PostPage";
import SearchResultPage from "./src/screens/SearchResultPage";
import DestinationSearchPage from "./src/screens/DestinationSearchPage";
import GuestsPage from "./src/screens/GuestsPage";
import "react-native-gesture-handler";
import Router from "./src/navigation/Router";
import WebViewComp from "./src/components/WebView/WebViewComp";

export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit-bold": require("./assets/fonts/outfit/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/outfit/Outfit-Medium.ttf"),
    "outfit-regular": require("./assets/fonts/outfit/Outfit-Regular.ttf"),
  });

  return (
    <>
      <View style={[styles.container]}>
        {/* <HomePage /> */}
        {/* <PostPage /> */}
        {/* <SearchResultPage /> */}
        {/* <DestinationSearchPage /> */}
        {/* <GuestsPage /> */}
        <WebViewComp />
        <StatusBar style="auto" />
      </View>
      <Router />

      {/* <script
        src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
        async
        defer
      ></script> */}

      {/* web view */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 30,
  },
});
