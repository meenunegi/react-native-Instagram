import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { PlainInput } from "../../components/InputField";

const { height, width } = Dimensions.get("window");
class PhnSignup extends React.Component {
  static navigationOptions = {
    title: "Phone Number"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <PlainInput placeholder="Enter your phone number" />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={{ textAlign: "center" }}>
            You may receive SMS updates from Instagram and can opt out at any
            time.
          </Text>
        </View>
        <TouchableOpacity style={[styles.inputWrapper, styles.btnContainer]}>
          <Text style={{ color: "#fff" }}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = EStyleSheet.create({
  container: {
    justifyContent: "center"
  },
  inputWrapper: {
    marginTop: 24,
    paddingHorizontal: 12,
    alignSelf: "center"
  },
  btnContainer: {
    height: 50,
    width: width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#0084ff"
  }
});

export default PhnSignup;
