import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ThankYouModal = ({ visible, children, onThankyou }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          position: "relative",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "white",
            borderRadius: 15
          }}
        >
          <Image
            source={require("./../images/coin.png")}
            style={{ height: 80, width: 80, marginTop: 80, marginLeft: 20 }}
          />
          <View style={{ marginLeft: 20, marginTop: 30 }}>
            <Text style={{ fontSize: 26, color: "grey", width: "80%" }}>
              The deposit is issued
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                width: "90%",
                marginTop: 30
              }}
            >
              Stas, thank you for your trust. The contract will be sent to your
              email
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#ef3024",
              width: "80%",
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              alignSelf: "center",
              marginBottom: 20
            }}
            onPress={onThankyou}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Thank You
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ThankYouModal;

// ThankYouModal.prototype = {
//   modalVisible: PropTypes.bool.isRequired
// };

const styles = StyleSheet.create({});
