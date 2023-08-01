import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 25,
    marginTop: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 60,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 10,
    flexDirection: "row",
    position: "absolute",
    // top: 10,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
