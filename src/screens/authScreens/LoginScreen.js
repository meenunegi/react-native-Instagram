import React from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import { PlainInput } from "../../components/InputField";
import { IconButton, Button } from "../../components/Button";
import { LanguagePopUp } from "../../components/PopUp";

const { width } = Dimensions.get("window");

const clientId = "55e4bb2907ff40eb9961da048606e208";
const redirecUrl = "http://www.github.com/amymeenu";
class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedLanguage: "English",
      selectLanguageId: "1"
    };
  }

  componentDidMount() {}

  instaLogin = async () => {
    // this.props.navigation.navigate("AppStack");
    const response = await fetch(
      `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirecUrl}&response_type=token&scope=public_content`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          
        })
      }
    );

    const data = await response.json();
    console.log(data);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={{ alignItems: "center", paddingTop: 20 }}
          onPress={() => this.setState({ modalVisible: true })}
        >
          <Text>{this.state.selectedLanguage}</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titleText}>Instagram</Text>

          <View style={styles.inputWrapper}>
            <PlainInput placeholder="Phone number, email address or username" />
          </View>

          <View style={styles.inputWrapper}>
            <PlainInput placeholder="Password" secureTextEntry />
          </View>

          <View style={styles.inputWrapper}>
            <Button title="Log in" onPress={() => this.instaLogin()} />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={{ fontSize: 12, color: "gray", fontFamily: "Roboto" }}>
              Forgotten your login details?{" "}
              <Text style={{ color: "#000" }}>Get help with signing in.</Text>
            </Text>
          </View>

          <View style={[styles.inputWrapper, styles.textWrapper]}>
            <View style={styles.line} />
            <Text style={styles.textStyle}>OR</Text>
          </View>

          <View style={styles.inputWrapper}>
            <IconButton
              title="Log in as"
              onPress={() => this.props.navigation.navigate("AppStack")}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <Text style={{ color: "gray", fontFamily: "Roboto" }}>
            Don't have an account?<Text style={{ color: "#000" }}>
              Sign up.
            </Text>
          </Text>
        </TouchableOpacity>
        <LanguagePopUp
          visible={this.state.modalVisible}
          language={dataFromChild =>
            this.setState({ selectedLanguage: dataFromChild })
          }
          onRequestClose={dataReceived =>
            this.setState({
              modalVisible: false,
              selectLanguageId: dataReceived
            })
          }
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontFamily: "lobster_regular",
    fontSize: 56
  },
  inputWrapper: {
    marginTop: 20
  },
  textWrapper: {
    width: width * 0.9,
    alignItems: "center",
    position: "relative"
  },
  line: {
    height: 1,
    backgroundColor: "#A9A9A9",
    position: "absolute",
    top: 7,
    width: width * 0.9
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "white",
    paddingHorizontal: 8,
    fontFamily: "Roboto",
    color: "gray"
  },
  footerContainer: {
    borderTopWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    paddingVertical: 18
  }
});

export default LoginScreen;
