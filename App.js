import React from "react";
import { Font } from "expo";
import { Text } from "react-native";

import EStyleSheet from "react-native-extended-stylesheet";

import Routes from "./src/Routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      lobster_regular: require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
      Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Text>Wait Loading</Text>;
    }
    return <Routes />;
  }
}

EStyleSheet.build({
  $primaryColor: "#fff"
});

export default App;
