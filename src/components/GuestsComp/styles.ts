import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { justifyContent: "space-between", height: "100%" },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#676767",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  searchInputContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  textInput2: {
    fontSize: 16,
    // marginLeft: 15,
    textAlign: "center",
    justifyContent: "center",
    color: "#8d8d8d",
  },
  arrowIcon: {
    marginTop: 3,
    width: "30%",
  },
  heading: {
    // width: "70%",
  },
});

export default styles;
