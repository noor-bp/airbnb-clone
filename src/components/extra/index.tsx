// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { createIconSet } from "@expo/vector-icons";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { useFonts } from "expo-font";
// import { Appearance, useColorScheme } from "react-native";

// export default function App() {
//   const glyphMap = { "icon-name": 1234, test: "∆" };
//   const CustomIcon: any = createIconSet(
//     glyphMap,
//     "fontFamily",
//     "custom-icon-font.ttf"
//   );

//   const loginWithFacebook = () => {
//     console.log("Button pressed");
//   };
//   const [fontsLoaded] = useFonts({
//     "outfit-bold": require("./assets/fonts/outfit/Outfit-Bold.ttf"),
//     "outfit-medium": require("./assets/fonts/outfit/Outfit-Medium.ttf"),
//     "outfit-regular": require("./assets/fonts/outfit/Outfit-Regular.ttf"),
//   });

//   let colorScheme = useColorScheme();

//   const themeTextStyle =
//     colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
//   const themeContainerStyle =
//     colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

//   return (
//     <View style={[styles.container, themeContainerStyle]}>
//       <Text style={{ fontFamily: "outfit-regular", fontSize: 30 }}>
//         Open up App.tsx to start working on your app!
//       </Text>
//       <Ionicons name="md-checkmark-circle" size={32} color="green" />
//       <Text style={[themeTextStyle]}>Color scheme: {colorScheme}</Text>

//       <Text>
//         <CustomIcon name="icon-name" size={32} color="red" />;
//       </Text>

//       {/* <FontAwesome.Button
//         name="google"
//         backgroundColor="#3b5998"
//         onPress={loginWithFacebook}
//       >
//         Login with Google
//       </FontAwesome.Button> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   lightContainer: {
//     backgroundColor: "#d0d0c0",
//   },
//   darkContainer: {
//     backgroundColor: "#242c40",
//   },
//   lightThemeText: {
//     color: "#242c40",
//   },
//   darkThemeText: {
//     color: "#d0d0c0",
//   },
// });
