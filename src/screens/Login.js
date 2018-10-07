import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import SvgUri from "react-native-svg-uri";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image
          style={styles.backgroundImage}
          source={require("../assets/img/newbg3x.png")}
        />

        <SvgUri
          width={screenWidth - 108}
          height={screenWidth - 108}
          style={{ backgroundColor: "white" }}
          source={require("../assets/img/logo2.svg")}
        />

        <View>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["rgb(0,186,142)", "rgb(43,255,205)"]}
              style={styles.loginButtonGradient}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.connectWithContainer}>
            <View style={[styles.connectWithLine, { marginLeft: 54 }]} />
            <Text style={styles.connectWithText}>Or connect with</Text>
            <View style={[styles.connectWithLine, { marginRight: 54 }]} />
          </View>

          <View style={styles.socialButtonsParent}>
            <TouchableOpacity style={{ marginRight: 14 }}>
              <View style={styles.socialButtonsContainer}>
                <Icon style={styles.facebookIcon} name="google" />
                <Text style={styles.socialButtonsText}>Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.socialButtonsContainer}>
                <Icon style={styles.facebookIcon} name="facebook" />
                <Text style={styles.socialButtonsText}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.registerationSectionContainer}>
            <Text style={styles.newUserText}>New user?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sing up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <View style={styles.skipButtonContainer}>
              <View style={styles.skipTextContainer}>
                <Text style={styles.skipText}>Skip</Text>
              </View>
              <Icon style={styles.skipIcon} name="chevron-double-right" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 39
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    resizeMode: "cover",
    width: screenWidth,
    height: screenHeight
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 20
  },
  loginButtonGradient: {
    width: screenWidth - 108,
    marginHorizontal: 54,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  connectWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16
  },
  connectWithLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff"
  },
  connectWithText: {
    color: "#fff",
    lineHeight: 18,
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "500"
  },
  socialButtonsContainer: {
    flexDirection: "row",
    height: 33,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 17,
    alignItems: "center",
    alignSelf: "flex-start",
    paddingRight: 19,
    paddingLeft: 11
  },
  socialButtonsText: {
    fontSize: 15,
    lineHeight: 18,
    color: "rgb(112,112,112)",
    fontWeight: "500",
    marginLeft: 6
  },
  facebookIcon: {
    fontSize: 22,
    color: "rgb(56,92,142)"
  },
  socialButtonsParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  registerationSectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26
  },
  newUserText: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff"
  },
  signUpText: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "700",
    color: "rgb(43,255,205)",
    textDecorationLine: "underline",
    marginLeft: 3
  },
  skipTextContainer: {
    backgroundColor: "rgba(255,255,255,0.4)",
    height: 31,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 66,
    alignSelf: "flex-start"
  },
  skipText: {
    fontSize: 13,
    lineHeight: 15,
    color: "#fff",
    fontWeight: "700"
  },
  skipButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35
  },
  skipIcon: {
    color: "rgba(255,255,255,0.46)",
    fontSize: 24
  }
};
