import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SvgUri from "react-native-svg-uri";

const CategoryItem = props => {
  let itemStyle = {
    container: {
      width: 115,
      height: 115,
      borderRadius: 15,
      marginRight: 20,
      backgroundColor: "#fff",
      shadowColor: props.shadowColor,
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 5,
      marginBottom: 10,
      elevation: 3
    },
    box: {
      width: 115,
      height: 115,
      borderRadius: 15
    },
    text: {
      fontSize: 13,
      color: "#fff",
      textAlign: "center",
      lineHeight: 15,
      fontWeight: "bold"
    },
    svg: {
      backgroundColor: "#fff",
      width: 51,
      height: 51,
      borderRadius: 26,
      marginBottom: 15
    },
    itemContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    touchable: {
      flex: 1
    }
  };

  return (
    <View style={itemStyle.container}>
      <LinearGradient colors={props.colors} style={itemStyle.box}>
        <TouchableOpacity activeOpacity={1} style={itemStyle.touchable}>
          <View style={itemStyle.itemContainer}>
            <View
              style={{
                backgroundColor: "#fff",
                width: 51,
                height: 51,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginBottom: 15
              }}
            >
              <SvgUri
                fill={props.fill}
                width="25"
                height="25"
                source={props.svgPath}
              />
            </View>
            <Text style={itemStyle.text}>{props.text}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* top text  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 20
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "rgb(62,62,62)"
            }}
          >
            Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 16
            }}
          >
            <Text style={{ color: "rgb(79 ,161 ,255)", fontSize: 15 }}>
              See All
            </Text>
            <Icon
              style={{ color: "rgb(79 ,161 ,255)", fontSize: 20 }}
              name="chevron-right"
            />
          </View>
        </View>

        {/* scroll view */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <CategoryItem
            shadowColor="rgb(255,160,105)"
            fill="rgb(255,160,105)"
            svgPath={require(`../../assets/img/coffee-cup.svg`)}
            text="Cofee Shop"
            colors={["rgb( 255 ,91 ,139)", "rgb(255, 160 ,105)"]}
          />
          <CategoryItem
            shadowColor="rgb(128,230,172)"
            fill="rgb(128,230,172)"
            svgPath={require(`../../assets/img/barbell.svg`)}
            text="Gym"
            colors={["rgb( 98, 229, 194)", "rgb(128, 230 ,172)"]}
          />
          <CategoryItem
            shadowColor="rgb(223, 160, 255)"
            fill="rgb(223, 160, 255)"
            svgPath={require(`../../assets/img/shopping-cart.svg`)}
            text="SuperMarket"
            colors={["rgb(173,160,255)", "rgb(223 ,160, 255)"]}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Categories;

const styles = {
  container: {
    paddingLeft: 27
  },
  contentContainerStyle: {}
};
