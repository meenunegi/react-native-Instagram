import React from "react";
import {
  View,
  Modal,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const languagesData = [
  {
    id: "1",
    name: "English"
  },
  {
    id: "2",
    name: "Russian"
  },
  {
    id: "3",
    name: "Japanese"
  },
  {
    id: "4",
    name: "Korean"
  }
];

class LanguagePopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent
          visible={this.props.visible}
          onRequestClose={this.props.onRequestClose}
        >
          <View style={styles.modalPopup}>
            <View style={styles.modalIn}>
              <Text style={{ fontSize: 18 }}>Select Your Language</Text>
              <FlatList
                data={languagesData}
                renderItem={data => (
                  <TouchableOpacity
                    style={{ paddingVertical: 5 }}
                    onPress={() => {
                      this.props.language(data.item.name);
                      this.props.onRequestClose(data.item.id);
                    }}
                  >
                    <Text style={{ fontSize: 18, color: "red" }}>
                      {data.item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default LanguagePopUp;
