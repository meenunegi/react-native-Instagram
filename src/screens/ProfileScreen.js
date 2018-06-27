import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";

const { width, height } = Dimensions.get("window");
export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Instagram",
    headerTitleStyle: {
      textAlign: "center",
      flex: 1,
      fontFamily: "lobster_regular",
      fontSize: 22
    },
    headerRight: <View />,
    headerLeft: <View />
  });

  renderHeader = () => (
    <View style={{ padding: 20, flexDirection: "row" }}>
      <View style={styles.profileImage} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 5
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>39</Text>
            <Text>Posts</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>339</Text>
            <Text>followers</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>393</Text>
            <Text>following</Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: "100%",
            marginLeft: 1,
            alignItems: "center"
          }}
        >
          <Text>Edit Profile</Text>
        </View>
      </View>
    </View>
  );

  renderItem = ({ item, index }) => (
    <View style={styles.list}>
      <View
        style={{
          flex: 1,
          margin: 1,
          height: width * 0.4,
          backgroundColor: "#CCC"
        }}
      />
      <View
        style={{
          flex: 1,
          margin: 1,
          height: width * 0.4,
          backgroundColor: "#CCC"
        }}
      />
      <View
        style={{
          flex: 1,
          margin: 1,
          height: width * 0.4,
          backgroundColor: "#CCC"
        }}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <FlatList
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" },
            { key: "g" },
            { key: "h" },
            { key: "i" },
            { key: "j" }
          ]}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
    borderWidth: 1,
    marginRight: 10
  }
});
