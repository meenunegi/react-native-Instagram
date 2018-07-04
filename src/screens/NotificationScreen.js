import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export default class NotificationScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Notification",
    headerTitleStyle: styles.headerText,
    headerRight: <View />,
    headerLeft: <View />
  });

  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          id: "1",
          msg: "Your facebook friend is on Instagram"
        },
        {
          id: "2",
          msg: "ABC liked your post"
        },
        {
          id: "3",
          msg: "Your Friend liked your comment"
        },
        {
          id: "4",
          msg: "Your Friend liked your comment"
        },
        {
          id: "5",
          msg: "Your facebook friend is on Instagram"
        },
        {
          id: "6",
          msg: "Your Friend liked your comment"
        },
        {
          id: "7",
          msg: "Your facebook friend is on Instagram"
        }
      ]
    };
  }

  renderItem = (data, index) => (
    <View style={styles.notifContainer}>
      <View style={styles.profileImage} />
      <Text style={{ paddingLeft: 10 }}>{data.msg}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.notifications}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
  headerText: {
    textAlign: "center",
    flex: 1,
    fontFamily: "lobster_regular",
    fontSize: 22
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.4,
    borderWidth: 1
  },
  notifContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  }
});
