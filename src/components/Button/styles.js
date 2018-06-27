import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const styles = EStyleSheet.create({
  btnContainer: {
    height: 50,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 1.6,
    borderColor: "#6495ED"
  },
  solidbtnContainer: {
    flexDirection: "row",
    backgroundColor: "#0084ff"
  },
  btnTitle: {
    fontSize: 16,
    color: "#6495ED",
    fontFamily: "Roboto"
  },
  iconLeft: {
    position: "absolute",
    left: 20,
    height: 25,
    width: 25
  },
  link: {
    color: "#000"
  }
});
export default styles;
