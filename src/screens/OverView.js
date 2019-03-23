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

const data = [
  {
    title: "Uber",
    date: "15/12/2018",
    price: "-79 $",
    image: "./../images/uberLogo.png"
  },
  {
    title: "Careem",
    date: "15/12/2018",
    price: "-179 $",
    image: "./../images/careemLogo.png"
  },
  {
    title: "Porsche",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  }
];

export default class OverView extends Component {
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
          <Text style={{ fontSize: 20, color: "black" }}>Account overview</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          <Icon name="ios-calendar" size={30} color="black" />

          <Icon name="ios-search" size={30} color="black" />
        </View>
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            height: 110,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 20
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
              <Text
                style={{ fontSize: 26, fontWeight: "bold", color: "black" }}
              >
                20,224 $
              </Text>
              <Text style={{ fontSize: 12, color: "black" }}>
                Current balance
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#ef3024",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40
              }}
            >
              <Icon name="ios-add" size={20} color="white" />
            </View>
          </View>
        </View>
        <Image
          source={require("./../images/graph.png")}
          style={{ width: "95%", marginTop: 20, alignSelf: "center" }}
        />
        <View
          style={{
            width: "100%",
            height: "30%",
            borderRadius: 15,
            backgroundColor: "white",
            marginTop: 20,
            position: "absolute",
            bottom: -20,
            paddingTop: 10
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("./../images/uberLogo.png")}
                  style={{ height: 50, width: 50, marginLeft: 10 }}
                />
                <View style={{ flexDirection: "column", marginLeft: 20 }}>
                  <Text style={{ paddingTop: 5, fontSize: 20, color: "black" }}>
                    {item.title}
                  </Text>
                  <Text style={{ paddingBottom: 5 }}>{item.date}</Text>
                </View>
                <Text style={{ position: "absolute", right: 40, top: 5 }}>
                  {item.price}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            //style={{ marginBottom: 40 }}
          />
          <View
            style={{
              backgroundColor: "rgba(243,244,250,0.6)",
              borderRadius: 25,
              elevation: 1,
              zIndex: 1000,
              position: "absolute",
              bottom: 50,
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
            //onPress={() => this.props.navigation.navigate("Overview")}
            >
              <Icon name="md-pie" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Deposits")}
            >
              <Icon name="ios-list-box" size={35} color="grey" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Location")}
            >
              <Icon name="ios-pin" size={35} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
