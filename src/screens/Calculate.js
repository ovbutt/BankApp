import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ThankYouModal from "./ThankYouModal";

export default class Calculate extends Component {
  state = { modalVisible: false };

  onThankyou() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f4fa" }}>
        <View style={{ marginLeft: 30, marginTop: 60 }}>
          <Text style={{ fontSize: 34, color: "black" }}>You will get</Text>
          <Text style={{ fontSize: 14, color: "black", marginTop: 10 }}>
            14.5% MONTHLY
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <Text style={{ fontSize: 30, color: "black" }}>22,860</Text>
            <Text style={{ fontSize: 20, color: "black", marginTop: 10 }}>
              UAH
            </Text>
          </View>
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
            height: 80,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 30,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: "row",
              marginTop: 25
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: "black"
              }}
            >
              20,000
            </Text>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                flexDirection: "row",
                marginRight: 30,
                marginLeft: 50
              }}
            >
              <Text style={{ color: "black", fontSize: 16, paddingRight: 10 }}>
                for 12 months
              </Text>
              <Icon name="ios-arrow-down" size={30} color="black" />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            elevation: 1,
            height: 80,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: "column",
              marginTop: 25
            }}
          >
            <Text style={{ color: "grey", fontSize: 14, paddingRight: 10 }}>
              INTEREST PAYMENTS
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Monthly
            </Text>
          </View>
          <View
            style={{
              marginRight: 60,
              marginLeft: 10
            }}
          >
            <Icon name="ios-arrow-down" size={30} color="black" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            elevation: 1,
            height: 80,
            width: "90%",
            alignSelf: "center",
            borderRadius: 15,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              flexDirection: "row",
              marginTop: 25
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "grey"
              }}
            >
              YOU WILL GET
            </Text>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                flexDirection: "row",
                marginRight: 30,
                marginLeft: 80
              }}
            >
              <Text style={{ color: "black", fontSize: 16, paddingRight: 10 }}>
                2,860 UAH
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 30,
            width: "90%",
            marginLeft: 30
          }}
        >
          <Icon name="ios-gift" size={35} color="#ef3024" />
          <Text style={{ marginLeft: 20 }}>
            With an investment of 20,000 uah, a free package of comfort services
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
            marginTop: 30,
            alignSelf: "center",
            marginBottom: 40
          }}
          onPress={() => {
            this.setState({ modalVisible: !this.state.modalVisible });
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
            Calculate
          </Text>
        </TouchableOpacity>
        <ThankYouModal
          visible={this.state.modalVisible}
          onThankyou={this.onThankyou.bind(this)}
        >
          The deposit is issued
        </ThankYouModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
