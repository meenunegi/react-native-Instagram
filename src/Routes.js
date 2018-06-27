import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

// import screens components here
import {
  Foundation,
  Feather,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import LoginScreen from "./screens/authScreens/LoginScreen";
import SignUpScreen from "./screens/authScreens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationScreen from "./screens/NotificationScreen";

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

const SearchStack = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen
  }
});

const CameraStack = createStackNavigator({
  CameraScreen: {
    screen: CameraScreen
  }
});

const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  }
});

const NotificationStack = createStackNavigator({
  NotificationScreen: {
    screen: NotificationScreen
  }
});

const AuthStack = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    }
  },
  {
    navigationOptions: {
      headerMode: "float",
      gesturesEnabled: false
    }
  }
);

const AppStack = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack
    },
    SearchStack: {
      screen: SearchStack
    },
    CameraStack: {
      screen: CameraStack
    },
    NotificationStack: {
      screen: NotificationStack
    },
    ProfileStack: {
      screen: ProfileStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeStack") {
          return (
            <Foundation
              name="home"
              size={28}
              color={focused ? "black" : "gray"}
            />
          );
        }
        if (routeName === "SearchStack") {
          return (
            <Feather
              name="search"
              size={28}
              color={focused ? "black" : "gray"}
            />
          );
        }
        if (routeName === "CameraStack") {
          return (
            <MaterialIcons
              name="add-box"
              size={28}
              color={focused ? "black" : "gray"}
            />
          );
        }
        if (routeName === "NotificationStack") {
          return (
            <Foundation
              name="heart"
              size={28}
              color={focused ? "black" : "gray"}
            />
          );
        }
        if (routeName === "ProfileStack") {
          return (
            <Ionicons
              name="md-person"
              size={28}
              color={focused ? "black" : "gray"}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      showLabel: false
    }
  }
);

const AppNavigation = createSwitchNavigator(
  {
    AuthStack: { screen: AuthStack },
    AppStack: { screen: AppStack }
  },
  {
    initialRouteName: "AuthStack"
  }
);

const Routes = () => <AppNavigation />;

export default Routes;
