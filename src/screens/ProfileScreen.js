import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image
} from "react-native";

const { width, height } = Dimensions.get("window");
const accessToken = "ADD_YOUR_TOKEN";

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

  state = {
    loaded: false,
    data: null
  };

  componentDidMount() {
    this.fetchFeed();
  }

  async fetchFeed() {
    const response = await fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`
    );

    const posts = await response.json();
    console.log(posts.data, "data");
    console.log(posts.data[0], "img");
    this.setState({
      loaded: true,
      data: posts.data
    });
  }

  renderHeader = () => (
    // const profileImg = this.state.data.user.profile_picture;

    <View style={{ padding: 20, flexDirection: "row" }}>
      {/* <Image
          style={styles.profileImage}
          source={{ uri: profileImg }}
          resizeMode="cover"
        /> */}
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

  renderItem = (postInfo, index) => {
    const imageUri = postInfo.images.standard_resolution.url;

    return (
      <View style={styles.gridImgContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: imageUri }}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <FlatList
          numColumns={3}
          data={this.state.data}
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
    backgroundColor: "#fff"
  },

  gridImgContainer: {
    padding: 1,
    backgroundColor: "#CCC"
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2,
    borderWidth: 1,
    marginRight: 10
  },
  image: {
    height: width * 0.33,
    width: width * 0.33
  }
});
