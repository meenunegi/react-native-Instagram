import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";

const IconButton = ({ title, onPress }) => (
  <TouchableOpacity
    style={[styles.btnContainer, styles.solidbtnContainer]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Entypo name="facebook" size={28} color="white" />
    <Text style={[styles.btnTitle, { color: "#fff", paddingLeft: 10 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const Button = ({ title, onPress, style }) => (
  <TouchableOpacity
    style={[styles.btnContainer, style]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.btnTitle}>{title}</Text>
  </TouchableOpacity>
);



module.exports = {
  IconButton,
  Button
};
