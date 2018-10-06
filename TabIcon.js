import React from "react";
import PropTypes from "prop-types";
import { Text, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const propTypes = {
  selected: PropTypes.bool,
  selected: PropTypes.bool,
  title: PropTypes.string
};

const TabIcon = props => {
  const plusStyle = () => {
    if (props.title === "Service") {
      return {
        top: Platform.OS === 'ios' ? -30 : 0 ,
        backgroundColor: "rgb(128,230,216)",
        width: 55,
        height: 55,
        borderRadius: 55,
        shadowColor: "rgb(128,230,216)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 5,
        zIndex: 1000
      };
    }
  };

  const iconColor = () => {
    if (props.title === "Service") {
      return "#fff";
    } else {
      return props.focused ? "rgb(128,230,216)" : "rgb(161,161,161)";
    }
  };

  return (
    <View style={[styles.container, plusStyle()]}>
      <Icon name={props.iconName} color={iconColor()} size={25} />

      {props.title !== "Service" && (
        <Text
          style={{
            color: props.focused ? "rgb(128,230,216)" : "rgb(161,161,161)",
            fontFamily: "System",
            fontSize: 13,
            lineHeight: 18,
            fontWeight: "500"
          }}
        >
          {props.title}
        </Text>
      )}
    </View>
  );
};

TabIcon.propTypes = propTypes;

export default TabIcon;

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 55
  }
};
