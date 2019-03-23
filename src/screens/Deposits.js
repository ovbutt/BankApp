import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const data = ["5", "10", "15", "20", "25", "30", "35"];

export default class Deposits extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f4fa" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>Deposits</Text>
        </View>

        <Icon
          name="ios-close"
          size={40}
          color="black"
          style={{ position: "absolute", right: 30, top: 10 }}
          onPress={() => this.props.navigation.goBack()}
        />

        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            height: 110,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 30
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 25
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 12, color: "black" }}>
                Deposit Amount
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  color: "black",
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "grey",
                  padding: 6,
                  paddingLeft: 20,
                  paddingRight: 100,
                  marginTop: 5
                }}
              >
                20,000
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
                flexDirection: "row",
                marginRight: 30
              }}
            >
              <Text style={{ color: "black", fontSize: 20, paddingRight: 10 }}>
                $
              </Text>
              <Icon name="ios-arrow-down" size={30} color="black" />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 16, color: "black" }}>AT THE TIME</Text>
          <Text>MONTH</Text>
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                height: 60,
                width: 60,
                backgroundColor: "white",
                elevation: 1,
                borderRadius: 15,
                margin: 6,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ paddingTop: 5, fontSize: 20, color: "black" }}>
                {item}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{ marginLeft: 10 }}
        />

        <Text
          style={{
            fontSize: 16,
            color: "black",
            marginLeft: 20,
            marginTop: 10
          }}
        >
          INTEREST PAYMENTS
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <View
            style={{
              backgroundColor: "#ef3024",
              width: 150,
              height: 200,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center"
            }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
                15.50%
              </Text>
              <Text style={{ marginTop: 10, color: "white" }}>At the end</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 150,
              height: 200,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center"
            }}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "black", fontWeight: "700", fontSize: 20 }}>
                14.50%
              </Text>
              <Text style={{ marginTop: 10 }}>Monthly</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#ef3024",
            width: "80%",
            height: 60,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            alignSelf: "center",
            marginBottom: 30
          }}
          onPress={() => this.props.navigation.navigate("Calculate")}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
            Calculate
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
