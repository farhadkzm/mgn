import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  StatusBar,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageSwiper from "./ImageSwiper";
import Promoted from "./Promoted";
import Categories from "./Categories";
import Recent from "./Recent";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);



class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  header = () => {
    const headerStyle = {
      container: {
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 8,
        backgroundColor: "rgb(250,250,250)"
      },
      img: {
        width: 120,
        height: 32,
        resizeMode: "contain"
      }
    };
    return (
      <View style={headerStyle.container}>
        <Image
          style={headerStyle.img}
          source={require("../../assets/img/logo.png")}
        />
      </View>
    );
  };

  searchForm = () => {
    const searchFormStyle = {
      container: {
        flexDirection: "row",
        marginHorizontal: 25,
        marginTop: 27,
        marginBottom: 25,
        
      },
      input: {
        shadowColor: "rgb(52,52,52)",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        width: "100%",
        paddingVertical: 0,
        height: 45,
        textAlignVertical: "center",
        backgroundColor: "rgb(248,248,248)",
        borderRadius: 20,
        paddingLeft: 59,
        elevation: 2
      },
      leftIcon: {
        position: "absolute",
        left: 27,
        color: "rgb(255,109,236)",
        top: 14,
        fontSize: 15,
        elevation: 2
      },
      filterButton: {
        position: "absolute",
        right: 26,
        top: 10,
        elevation: 2
      },
      filterIcon: {
        fontSize: 20,
        color: "rgb(112,112,112)"
      }
    };
    return (
      <View style={searchFormStyle.container}>
        <TextInput
          style={searchFormStyle.input}
          placeholder="Browse by location..."
          placeholderTextColor="rgb(161,161,161)"
          underlineColorAndroid='transparent'
        />
        <Icon name="map-marker-radius" style={searchFormStyle.leftIcon} />
        <TouchableOpacity style={searchFormStyle.filterButton}>
          <Icon style={searchFormStyle.filterIcon} name="filter" />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        {this.header()}
        {this.searchForm()}

        <ImageSwiper />

        <View
          style={{
            marginVertical: 20,
            borderBottomWidth: 1,
            marginHorizontal: 16,
            borderColor: "rgb(183,183,183)"
          }}
        />

        <Promoted />

         <View
          style={{
            marginVertical: 20,
            borderBottomWidth: 1,
            marginHorizontal: 16,
            borderColor: "rgb(183,183,183)"
          }}
        />

        <Categories />

         <View
          style={{
            marginVertical: 20,
            borderBottomWidth: 1,
            marginHorizontal: 16,
            borderColor: "rgb(183,183,183)"
          }}
        />

        <Recent/>


      </ScrollView>
    );
  }
}

export default Landing;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: "#79B45D",
    height: APPBAR_HEIGHT
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B"
  }
});
