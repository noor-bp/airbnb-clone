import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface GuestsCompProps {}

const GuestsComp: React.FC<GuestsCompProps> = () => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const navigation: any = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View>
          {/* <View style={styles.searchInputContainer}>
          <Text style={styles.arrowIcon}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Text>
          <View style={styles.heading}>
            <Text style={styles.textInput}>Tenerif Spain</Text>
            <Text style={styles.textInput2}>11-14 Dec</Text>
          </View>
        </View> */}
          <View style={styles.row}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Adults</Text>
              <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                onPress={() => setAdults(Math.max(0, adults - 1))}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
              </Pressable>

              <Text style={{ marginHorizontal: 14, fontSize: 16 }}>
                {adults}
              </Text>

              <Pressable
                onPress={() => setAdults(adults + 1)}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Children</Text>
              <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
              </Pressable>

              <Text style={{ marginHorizontal: 14, fontSize: 16 }}>
                {children}
              </Text>

              <Pressable
                onPress={() => setChildren(children + 1)}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.row}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Infants</Text>
              <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                onPress={() => setInfants(Math.max(0, infants - 1))}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
              </Pressable>

              <Text style={{ marginHorizontal: 14, fontSize: 16 }}>
                {infants}
              </Text>

              <Pressable
                onPress={() => setInfants(infants + 1)}
                style={styles.button}
              >
                <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Explore",
              params: {
                screen: "SearchResults",
              },
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: "#f15454",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Search
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default GuestsComp;
