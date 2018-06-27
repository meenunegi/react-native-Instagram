import React from "react";
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { createMaterialTopTabNavigator } from "react-navigation";
import { Feather } from "@expo/vector-icons";

import PhoneSignup from "./PhnSignup";
import EmailSignUp from "./EmailSignUp";

const { height, width } = Dimensions.get("window");

const TabBars = createMaterialTopTabNavigator(
  {
    PhoneSignup: {
      screen: PhoneSignup
    },
    EmailSignUp: {
      screen: EmailSignUp
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#000",
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileImage}>
            <Feather name="user" size={78} color="black" />
          </View>
          <TabBars />
        </ScrollView>

        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "gray", fontFamily: "Roboto" }}>
            Already have an account?<Text style={{ color: "#000" }}>
              Log in.
            </Text>
          </Text>
        </TouchableOpacity>
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
    flex: 1
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.4,
    borderWidth: 2,
    alignSelf: "center",
    marginTop: height * 0.12,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  footerContainer: {
    borderTopWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    paddingVertical: 18
  }
});

export default SignUpScreen;
