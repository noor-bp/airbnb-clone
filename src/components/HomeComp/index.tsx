import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const HomeComp = (props: Props) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>not just a component</Text> */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Text>
          <AntDesign name="search1" size={24} color="#f15454" />{" "}
        </Text>
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore btn clicked!")}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeComp;
