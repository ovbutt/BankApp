import React, { Component } from "react";
import { Text, StyleSheet, View, Image, FlatList, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

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
export default class DepositList extends Component {
  constructor(props) {
    super(props);
    this.state = { gestureName: "none" };
  }

  // onSwipeDown(gestureState) {
  //   const { onSwipeDown } = this.props;
  //   {
  //     this.state.onSwipeDown;
  //   }
  //   //alert("Swipe Down");
  // }

  // onSwipe(gestureName, gestureState) {
  //   const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
  //   this.setState({ gestureName: gestureName });
  //   switch (gestureName) {
  //     case SWIPE_UP:
  //       //this.setState({ backgroundColor: "red" });
  //       break;
  //     case SWIPE_DOWN:
  //       {
  //         alert("Swipe Down");
  //       }
  //       break;
  //     case SWIPE_LEFT:
  //       //this.setState({ backgroundColor: "blue" });
  //       break;
  //     case SWIPE_RIGHT:
  //       //this.setState({ backgroundColor: "yellow" });
  //       break;
  //   }
  // }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 80
    };
    const { visible, onSwipeDown } = this.props;
    return (
      <GestureRecognizer
        //onSwipe={(direction, state) => alert("Swipe")}
        onSwipeDown={onSwipeDown}
        config={config}
      >
        <Modal
          animationType="slide"
          visible={visible}
          onRequestClose={() => {}}
          presentationStyle="fullScreen"
        >
          <View style={{ flex: 1 }}>
            <View style={{ width: "100%", height: 80 }}>
              <Text
                style={{
                  fontSize: 26,
                  color: "black",
                  fontWeight: "700",
                  alignSelf: "center",
                  marginTop: 20
                }}
              >
                History
              </Text>
              <Icon
                name="ios-close"
                size={35}
                color="black"
                style={{
                  position: "absolute",
                  right: 40,
                  top: 30
                }}
                onPress={onSwipeDown}
              />
            </View>

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
              style={{ marginTop: 30 }}
            />
          </View>
        </Modal>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({});
