import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontFamily: "lobster_regular",
      fontSize: 22
    },
    headerRight: <View />,
    headerLeft: <View />
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
