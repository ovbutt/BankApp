import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";
import Icon from "react-native-vector-icons/Ionicons";
import DepositList from "./DepositList";

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
  },
  {
    title: "Ford",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Bughatti",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Ferrari",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Nissan",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Mazda",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Rolls Royce",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  },
  {
    title: "Lamborghini",
    date: "15/12/2018",
    price: "-200000 $",
    image: "./../images/porscheLogo.png"
  }
];

export default class Home extends Component {
  state = { showModal: false };
  onSwipeDown() {
    this.setState({ showModal: !this.state.showModal });
  }
  onSwipeUp(gestureState) {
    // const { onSwipeDown } = this.props;
    // {
    //   onSwipeDown;
    // }
    alert("Swipe Up");
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      // <GestureRecognizer
      //   //onSwipe={(direction, state) => alert("Swipe")}
      //   onSwipeUp={() => alert("Swipe up called")}
      //   config={config}
      // >
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Image
            source={require("./../images/drawer.png")}
            style={{ marginTop: 50, marginLeft: 30 }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            position: "absolute",
            right: 40,
            top: 40,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Icon
            name="ios-chatboxes"
            size={30}
            color="black"
            //style={{ position: "absolute", right: 30, top: 30 }}
          />
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              marginLeft: 20
            }}
            source={require("./../images/profileImage.jpg")}
          />
        </View>
        <View style={{ marginLeft: 10, marginTop: 30, marginRight: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require("./../images/smallCard.png")}
              style={{ borderRadius: 10, marginLeft: 20 }}
            />

            <Image
              source={require("./../images/cardSmall2.png")}
              style={{ borderRadius: 10, marginLeft: 30 }}
            />

            <Image
              source={require("./../images/card.png")}
              style={{
                borderRadius: 10,
                height: 200,
                width: 280,
                marginLeft: 30
              }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <Text style={{ color: "black", fontSize: 18 }}>SEND MONEY TO</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 5,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require("./../images/addButton.png")}
              style={{ margin: 30 }}
            />
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
            <View
              style={{
                height: 110,
                width: 100,
                elevation: 1,
                backgroundColor: "white",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10
              }}
            >
              <Image
                source={require("./../images/profileImage.jpg")}
                style={{ height: 50, width: 50, borderRadius: 5 }}
              />
              <Text style={{ marginTop: 10 }}>John Doe</Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => this.setState({ showModal: !this.state.showModal })}
        >
          <View
            style={{
              width: "100%",
              //height: "30%",
              borderRadius: 15,
              backgroundColor: "white",
              marginTop: 20
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 14,
                fontWeight: "bold",
                marginLeft: 30,
                marginTop: 20,
                marginBottom: 10
              }}
            >
              HISTORY
            </Text>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("./../images/uberLogo.png")}
                    style={{ height: 50, width: 50, marginLeft: 10 }}
                  />
                  <View style={{ flexDirection: "column", marginLeft: 20 }}>
                    <Text
                      style={{ paddingTop: 5, fontSize: 20, color: "black" }}
                    >
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
              //style={{ width: "100%", height: 250 }}
            />
            <DepositList
              visible={this.state.showModal}
              onSwipeDown={this.onSwipeDown.bind(this)}
            />
          </View>
        </TouchableOpacity>
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
          //onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon name="md-wallet" size={35} color="black" />
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Location")}
          >
            <Icon name="ios-pin" size={35} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
      // </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4fa"
  }
});
