import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class BecomeClient extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "##f3f4fa" }}>
        <View
          style={{ backgroundColor: "#484848", width: "100%", height: "70%" }}
        >
          <Icon
            name="ios-arrow-back"
            size={25}
            color="white"
            style={{ marginLeft: 30, marginTop: 30 }}
            onPress={() => this.props.navigation.goBack()}
          />
          <Icon
            name="ios-chatboxes"
            size={30}
            color="white"
            style={{ position: "absolute", right: 30, top: 30 }}
          />
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image
              source={require("./../images/card.png")}
              style={{ width: 350, height: 210, borderRadius: 10 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: "90%", marginTop: 30, marginBottom: 10 }}>
              <Text style={{ color: "white", fontSize: 14 }}>
                Shopping for 360/55 days - grace period - rate of 0.01% per
                annum. 0.01% up to 12 months in case of payment for a purchase
                by a card
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: "80%",
                height: 60,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20
              }}
              onPress={() => this.props.navigation.navigate("BecomeClient")}
            >
              <Text
                style={{ color: "#131313", fontWeight: "700", fontSize: 18 }}
              >
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={require("./../images/card.png")}
            style={{ width: 350, height: 210, borderRadius: 10, opacity: 0.5 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
