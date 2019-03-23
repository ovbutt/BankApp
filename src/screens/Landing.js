import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Image
            source={require("./../images/drawer.png")}
            style={{ marginTop: 50, marginLeft: 30 }}
          />
        </TouchableWithoutFeedback>
        <Image
          source={require("./../images/logo.png")}
          style={{ height: 32, width: 32, marginTop: 55, marginLeft: 32 }}
        />
        <View
          style={{ flexDirection: "column", marginLeft: 30, marginTop: 50 }}
        >
          <Text style={{ fontSize: 30, color: "#7b7b7b" }}>Welcome to</Text>
          <Text style={{ fontSize: 30, color: "#7b7b7b" }}>the new</Text>
          <Text style={{ fontSize: 30, color: "#7b7b7b" }}>Alfa-Bank</Text>
        </View>

        <View
          style={{ flexDirection: "column", marginLeft: 30, marginTop: 50 }}
        >
          <Text style={{ fontSize: 20, color: "#97a6bb" }}>
            New level of features
          </Text>
          <Text style={{ fontSize: 20, color: "#97a6bb" }}>with new app</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#282829",
              width: "80%",
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#ef3024",
              width: "80%",
              height: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              shadowColor: "#ef3024",
              shadowOpacity: 0.5,
              shadowRadius: 10,
              shadowOffset: { width: 5, height: 5 }
            }}
            onPress={() => this.props.navigation.navigate("BecomeClient")}
          >
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              Become a client
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4fa"
  }
});
