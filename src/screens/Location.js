import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class Location extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f4fa" }}>
        <Text style={{ fontSize: 28, color: "black", alignSelf: "center", marginBottom: 30, marginTop: 20, fontWeight : 'bold' }}>
          Location
        </Text>
        <Image
          source={require("./../images/GoogleMapTA.jpg")}
          style={{ width: "90%", height: "80%", borderRadius: 15, alignSelf: 'center' }}
        />
        <View
          style={{
            backgroundColor: "rgba(243,244,250,0.6)",
            borderRadius: 25,
            elevation: 1,
            zIndex: 1000,
            position: "absolute",
            bottom: 30,
            left: 50,
            right: 50,
            //opacity: 0.1,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            height: 60
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon name="md-wallet" size={35} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Overview")}
          >
            <Icon name="md-pie" size={35} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Deposits")}
          >
            <Icon name="ios-list-box" size={35} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ios-pin" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
