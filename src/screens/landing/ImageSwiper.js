import React, { Component } from "react";
import { View, Image, Dimensions, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import LinearGradient from "react-native-linear-gradient";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width;

class ImageSwiper extends Component {
  constructor() {
    super();
    this.state = {
      starCount: 5,
      data: [
        require("../../assets/img/v.jpg"),
        require("../../assets/img/v.jpg"),
        require("../../assets/img/v.jpg")
      ],
      activeSlide: 0
    };
  }

  // onStarRatingPress = rating => {
  //   console.log(rating);
  //   this.setState({
  //     starCount: rating
  //   });
  // };

  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={this.state.activeSlide}
        inactiveDotScale={1}
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0)"
        }}
        dotStyle={{
          width: 9,
          height: 9,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "rgb(141, 141, 141)" ,
          backgroundColor: "rgb(141, 141, 141)",
          marginHorizontal: -10
        }}
        inactiveDotStyle={{
          backgroundColor: "#fff",
        }}
      />
    );
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{elevation:3}} key={index}>
        <Image style={styles.sliderImage} source={item} />
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.4)"]}
          style={styles.overaly}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={styles.serviceName}>Service Name</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 12, marginRight: 2 }}>
                4.6
              </Text>
              <StarRating
                maxStars={5}
                rating={this.state.starCount}
                disabled
                iconSet="MaterialCommunityIcons"
                emptyStar="star-outline"
                fullStar="star"
                containerStyle={{ alignSelf: "flex-start" }}
                starSize={14}
                fullStarColor="rgb(254,222,0)"
                emptyStarColor="rgb(141,141,141)"
              />
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginTop: 5, alignItems: "center" }}
          >
            <Icon
              style={{ color: "#fff", marginRight: 2, fontSize: 15 }}
              name="map-marker-outline"
            />
            <Text style={{ color: "#fff" }}>NY, Jordan ave</Text>
          </View>
        
        </LinearGradient>
      </View>
    );
  };

  slider = () => {
    return (
      <View>
        <Carousel
          data={this.state.data}
          renderItem={this._renderItem}
          layout="default"
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 60}
          sliderHeight={screenWidth * 2}
          itemHeight={screenWidth * 0.62}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
        {this.pagination}
      </View>
    );
  };

  render() {
    return <View style={styles.container}>{this.slider()}</View>;
  }
}

export default ImageSwiper;

const styles = {
  container: {
    width: screenWidth,
    height: screenWidth * 0.62,
    alignSelf: "flex-start"
  },
  sliderImage: {
    width: screenWidth - 60,
    height: (screenWidth - 60) * 0.62,
    resizeMode: "cover",
    borderRadius: 15
  },
  overaly: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
    padding: 13
  },
  serviceName: {
    color: "#fff",
    fontSize: 15
  }
};
