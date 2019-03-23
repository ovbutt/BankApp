import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: "55%",
            backgroundColor: "#ef3024",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("./../images/logoWhite.png")}
            style={{ height: 50, width: 50, marginBottom: 20 }}
          />
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            {" "}
            Log In{" "}
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextInput
            placeholder="example@email.com"
            selectionColor="#ef3024"
            placeholderTextColor="#ef3024"
            underlineColorAndroid="#ef3024"
            style={{ color: "#ef3024", fontSize: 18, width: "90%" }}
          />
          <TextInput
            placeholder="password"
            selectionColor="#ef3024"
            placeholderTextColor="#ef3024"
            underlineColorAndroid="#ef3024"
            style={{ color: "#ef3024", fontSize: 18, width: "90%" }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#ef3024",
              width: "80%",
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40
            }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
