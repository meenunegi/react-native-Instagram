import React from "react";
import { View, Modal, ActivityIndicator, Text } from "react-native";

import styles from "./styles";

const Loader = props => {
  const { loading, text, ...attributes } = props;

  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} color="#243154" size="large" />
          <Text>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};


export default Loader;
