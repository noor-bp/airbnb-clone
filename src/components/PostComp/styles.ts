import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // marginTop: 55,
    marginTop: 20,

    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  image: {
    width: "100%",
    // height: 100,
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
  bedroomsTxt: {
    marginVertical: 10,
    fontSize: 14,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 20,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  price: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

export default styles;
