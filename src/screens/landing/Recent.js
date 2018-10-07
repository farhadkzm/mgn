import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SvgUri from "react-native-svg-uri";

class RecentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  heartIconContainerStyle = () => {
    if (this.state.liked) {
      return {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "rgb(255,77,139)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        position: "absolute",
        top: (screenWidth - 52) * 0.65 - 52,
        alignSelf: "center",
        elevation: 2
      };
    }
    return {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "rgb(255,77,139)",
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "rgb(255,77,139)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.24,
      shadowRadius: 4,
      position: "absolute",
      top: (screenWidth - 52) * 0.65 - 52,
      alignSelf: "center",
      elevation: 2
    };
  };

  heartIconStyle = () => {
    if (this.state.liked) {
      return {
        fontSize: 28,
        color: "rgb(255,109,236)",
        alignSelf: "center",
        position: "absolute",
        top: 6,
        alignSelf: "center"
      };
    }
    return {
      fontSize: 28,
      color: "#fff",
      alignSelf: "center",
      position: "absolute",
      top: 6,
      alignSelf: "center"
    };
  };

  likeIconPress = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    return (
      <View
        style={{
          marginBottom: Platform.OS === "ios" ? 30 : 30,
          backgroundColor: "#fff",
          shadowColor: "rgb(52,52,52)",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.16,
          shadowRadius: 15,
          borderRadius: 15,
          elevation: 2
        }}
      >
        {/* top section / image */}
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/img/recent1.jpg")}
          />
        </View>

        {/* texts  */}
        <View style={styles.textContainer}>
          {/* event name */}
          <View style={styles.eventNameRow}>
            <Text style={styles.eventNameText}>Event Name</Text>
            <SvgUri
              fill="red"
              width="25"
              height="25"
              source={require("../../assets/img/bookmark.svg")}
            />
          </View>

          {/* business name */}
          <View style={styles.businessNameRow}>
            <Text style={styles.businessNameText}>Business Name</Text>

            {/* right side */}
            <View style={{ flexDirection: "row" }}>
              <View style={styles.businessRowRightContainer}>
                <SvgUri
                  fill='rgb(161,161,161)'
                  width="12"
                  height="10"
                  source={require("../../assets/img/comment.svg")}
                />
                <Text style={styles.businessRowRightText}>13</Text>
              </View>

              <View
                style={[styles.businessRowRightContainer, { marginLeft: 15 }]}
              >
                <Icon size={12} color="rgb(161,161,161)" name="heart-outline" />
                <Text style={styles.businessRowRightText}>101</Text>
              </View>
            </View>
          </View>

          <Text style={styles.descriptionText}>
            Lorem ipsum has become the industry standard for design mockups and
            prototypes. By adding a little bit of Latin to a mockup, you’re able
            to show clients a more complete version.
          </Text>

          <Text style={styles.readMore}>Read more...</Text>
        </View>
        {/* heart */}
        <TouchableOpacity
          style={this.heartIconContainerStyle()}
          activeOpacity={1}
          onPress={() => this.likeIconPress()}
        >
          <Icon
            style={this.heartIconStyle()}
            name={this.state.liked ? "heart" : "heart-outline"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class Recent extends Component {
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
            Recent
          </Text>
        </View>

        <RecentItem />
        <RecentItem />
      </View>
    );
  }
}

export default Recent;

const screenWidth = Dimensions.get("window").width;

const styles = {
  container: {
    paddingHorizontal: 26
  },
  img: {
    width: screenWidth - 52,
    height: (screenWidth - 52) * 0.65,
    resizeMode: "cover",
    borderRadius: 15
  },
  textContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    top: -32,
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 10
  },
  eventNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 5
  },
  eventNameText: {
    fontSize: 17,
    color: "rgb(112,112,112)",
    lineHeight: 20,
    fontWeight: "500",
    top: 10
  },
  businessNameText: {
    color: "rgb(79,161,255)",
    fontSize: 13,
    lineHeight: 15
  },
  businessRowRightContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center"
  },
  businessRowRightText: {
    fontSize: 10,
    color: "rgb(161,161,161)",
    marginLeft: 2
  },
  businessNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: "rgb(161,161,161)",
    paddingBottom: 10,
    marginBottom: 15
  },
  descriptionText: {
    lineHeight: 18,
    color: "rgb(161,161,161)",
    fontSize: 13
  },
  readMore: {
    fontSize: 13,
    lineHeight: 15,
    color: "rgb(79,161,255)",
    marginTop: 9
  },
  heartIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(255,77,139)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    position: "absolute",
    top: -20,
    alignSelf: "center"
  },
  heartIcon: {
    fontSize: 28,
    color: "rgb(255,109,236)",
    alignSelf: "center",
    position: "absolute",
    top: 6,
    alignSelf: "center"
  }
};
