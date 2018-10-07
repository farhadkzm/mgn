import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width;

const styles = {
  img: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 10
  },
  imgContainer: {
    borderRadius: 10,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    backgroundColor: "#fff",
    marginRight: 9,
    elevation: 3
  },
  textContainer: {
    flex: 1
  },
  itemsContainer: {
    flexDirection: "row"
  },
  column: {
    width: screenWidth - 65,
    marginRight: 20
  }
};

const ratingProps = {
  disabled: false,
  maxStars: 5,
  starSize: 13,
  rating: 2,
  fullStarColor: "#848a8a",
  emptyStarColor: "#848a8a",
  containerStyle: {
    alignSelf: "flex-start"
  },
  starStyle: {
    marginRight: 2
  }
};

const PromotedItem = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{ paddingBottom: 3, marginBottom: 15 }}
    >
      <View style={styles.itemsContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/img/doctor.jpg")}
          />
        </View>

        <View style={styles.textContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "rgb(112,112,112)", fontSize: 13 }}>
              Service Name
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "rgb(161,161,161)",
                  fontSize: 10,
                  marginRight: 2
                }}
              >
                4.6
              </Text>
              <StarRating
                maxStars={5}
                rating={5}
                disabled
                iconSet="MaterialCommunityIcons"
                emptyStar="star-outline"
                fullStar="star"
                containerStyle={{ alignSelf: "flex-start" }}
                buttonStyle={{ margin: 0, width: 12 }}
                starStyle={{ padding:0 }}
                starSize={14}
                fullStarColor="rgb(254,222,0)"
                emptyStarColor="rgb(141,141,141)"
              />
            </View>
          </View>

          <Text
            style={{
              color: "rgb(176,176,176)",
              fontSize: 13,
              marginBottom: 10,
              marginTop: 3
            }}
          >
            Medical
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center"
            }}
          >
            <Icon
              style={{
                color: "rgb(112,112,112)",
                marginRight: 2,
                fontSize: 12
              }}
              name="map-marker-outline"
            />
            <Text style={{ color: "rgb(112,112,112)", fontSize: 10 }}>
              NY, Jordan ave
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class Promoted extends React.Component {
  render() {
    return (
      <View style={{ paddingLeft: 27, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: 39
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "rgb(62,62,62)"
            }}
          >
            Promoted Services
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.column}>
            <PromotedItem />
            <PromotedItem />
            <PromotedItem />
          </View>

          <View style={styles.column}>
            <PromotedItem />
            <PromotedItem />
            <PromotedItem />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Promoted;
