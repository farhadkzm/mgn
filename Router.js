import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  Scene,
  Router,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from "react-native-router-flux";
import TabIcon from "./TabIcon";
import Landing from "./src/screens/landing/Landing";
import More from "./src/screens/More";
import Login from "./src/screens/Login";
import { ifIphoneX } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#fff",
    shadowColor: "rgb(127,127,127)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 25,
    // justifyContent: "center",
    ...ifIphoneX(
      {
        paddingBottom: 20,
        height: 84
      },
      {
        paddingTop: 0,
        height: 64
      }
    )
  }
});

const AppRouter = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Overlay key="overlay">
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Stack hideNavBar key="root" titleStyle={{ alignSelf: "center" }}>
              
              <Drawer
                hideNavBar
                key="drawer"
                contentComponent={More}
                drawerWidth={300}
                initial={true}
                drawerPosition="right"
              >
              <Scene component={Login} hideNavBar key='login' initial={true} />
                <Scene hideNavBar>
                  <Tabs
                    key="tabbar"
                    swipeEnabled
                    showLabel={false}
                    tabBarStyle={styles.tabBarStyle}
                    tabBarPosition="bottom"
                  >
                    <Scene
                      key="explore"
                      title="Explore"
                      hideNavBar
                      icon={TabIcon}
                      iconName="compass-outline"
                    >
                      <Scene key="business" component={Landing} hideNavBar />
                      <Scene
                        key="editBusiness"
                        component={More}
                        title="Search"
                        hideNavBar
                      />
                    </Scene>
                    <Scene
                      key="find"
                      component={More}
                      title="Search"
                      hideNavBar
                      icon={TabIcon}
                      iconName="magnify"
                    />
                    <Stack
                      key="library"
                      title="Service"
                      icon={TabIcon}
                      hideNavBar
                      iconName="plus"
                      solid={false}
                    >
                      <Scene component={More} key="bookList" />
                    </Stack>
                    <Scene
                      key="events"
                      component={More}
                      title="Events"
                      icon={TabIcon}
                      hideNavBar
                      iconName="bell-outline"
                    />
                    <Scene
                      title="Profile"
                      key="profile"
                      iconName="account-outline"
                      component={More}
                      icon={TabIcon}
                      hideNavBar
                    />
                  </Tabs>
                </Scene>
              </Drawer>
            </Stack>
          </Lightbox>
        </Modal>
      </Overlay>
    </Router>
  </View>
);

export default AppRouter;
