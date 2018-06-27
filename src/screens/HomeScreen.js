import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const accessToken = "4096695451.55e4bb2.6564c0b368654835babf1ebbb8fcaed7";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Instagram",
    headerTitleStyle: styles.headerText,
    headerRight: (
      <TouchableOpacity
        style={{
          paddingHorizontal: 10
        }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="paper-plane" size={24} color="black" />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity
        style={{
          paddingHorizontal: 10
        }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="camera" size={24} color="black" />
      </TouchableOpacity>
    )
  });

  state = {
    loaded: false,
    data: null,
    comments: []
  };

  componentDidMount() {
    this.fetchFeed();
  }

  createPost = (postInfo, index) => {
    const imageUri = postInfo.images.standard_resolution.url;
    const username = postInfo.user.username.toString();
    const numlikes = postInfo.likes.count;

    return (
      <View>
        <View style={styles.infoContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <View style={styles.profileImage} />
            <Text style={styles.infoText}>{username}</Text>
          </View>
          <MaterialCommunityIcons name="dots-vertical" size={26} color="gray" />
        </View>

        <Image style={styles.image} source={{ uri: imageUri }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 12
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <SimpleLineIcons name="bubble" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="paper-plane" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>
          {numlikes + (numlikes !== 1 ? " likes" : " like")}
        </Text>
        <View style={{ paddingLeft: 10 }}>{this.state.comments[index]}</View>
      </View>
    );
  };

  makeCommentsList = async posts => {
    let postsArray = posts.map(async post => {
      const postId = post.id;
      if (post.comments.count === 0) {
        return (
          <View style={styles.comment} key={postId}>
            <Text>No Comments!</Text>
          </View>
        );
      }
      const response = await fetch(
        `https://api.instagram.com/v1/media/${postId}/comments?access_token=${accessToken}`
      );
      const comments = await response.json();
      const commentsArray = comments.data;

      const commentsList = commentsArray.map(commentInfo => (
        <View style={styles.comment} key={commentInfo.id}>
          <Text style={styles.commentText}>{commentInfo.from.username}</Text>
          <Text>{commentInfo.text}</Text>
        </View>
      ));
      return commentsList;
    });
    postsArray = await Promise.all(postsArray);
    return postsArray;
  };

  async fetchFeed() {
    const response = await fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`
    );

    const posts = await response.json();
    console.log(posts.data, "data");
    const comments = await this.makeCommentsList(posts.data);

    this.setState({
      loaded: true,
      data: posts.data,
      comments
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => this.createPost(item, index)}
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
    justifyContent: "center"
  },
  headerText: {
    textAlign: "center",
    flex: 1,
    fontFamily: "lobster_regular",
    fontSize: 22
  },
  inputWrapper: {
    marginTop: 20
  },
  profileImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.4,
    borderWidth: 1
  },
  image: {
    width,
    height: width * 0.8
  },
  infoContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  infoText: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});

// const imageUri = postInfo.images.standard_resolution.url;
// const username = postInfo.user.username;
// const numLikes = postInfo.likes.count;
