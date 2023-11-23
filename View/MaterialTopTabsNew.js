import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome"; //
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Screen3 from "../screens/Screen3";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import screentimkiem from "../screens/Search"
import Search from "../screens/Search";
import user from "../screens/User";
const MaterialTopTabs = createMaterialTopTabNavigator();

import screen3cham from "../screens/BaCham"


// ... (your imports)

export const MaterialTopTabsScreenNews = ({ navigation }) => {
  const getTabBarGradientColors = () => {
    return ["#54acb5", "#1a698b"];
  };

  const renderTabBarButton = ({ route, state, navigation }) => {
    const focusedRoute = getFocusedRouteNameFromRoute(route) || "";
    const isFocused = focusedRoute === route.name;
    const iconColor = isFocused ? "#gray" : "#fff";

    const renderLabel = () => {
      switch (route.name) {
        case "Tab1":
          return <Icon name="list-ul" color={iconColor} size={25} />;
        case "Tab2":
          return "Cho bạn";
        case "Tab3":
          return "Nóng";
        case "Tab4":
          return "Mới";
        case "Tab5":
          return "Tổng hợp";
        case "Tab6":
          return "Bóng đá VN";
        case "Tab7":
          return <Icon name="search" color={iconColor} size={25} />;
        case "Tab8":
          return <Icon name="user" color={iconColor} size={25} />;
        default:
          return null;
      }
    };

    return (
      <TouchableOpacity
        key={route.key}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }}
      >
        <Text style={{ color: iconColor }}>{renderLabel()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <MaterialTopTabs.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "auto",
          padding: 10,
        },
      }}
      tabBar={(props) => (
        <LinearGradient
        start={{ x: 0, y: 0 }} // Left
        end={{ x: 1, y: 0 }}   // Right
          colors={getTabBarGradientColors()}
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 10,
          }}
        >
          {props.state.routes.map((route) =>
            renderTabBarButton({ route, state: props.state, navigation: props.navigation })
          )}
        </LinearGradient>
      )}
    >
      <MaterialTopTabs.Screen
        name="Tab1"
        component={screen3cham}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab2"
        component={Screen3}
        initialParams={{ tabName: "Cho bạn" }}
        options={{
          tabBarLabel: "Cho bạn",
          tabBarLabelStyle: {
            width: 51,
            textTransform: "none",
            fontSize: 13,
            fontWeight: "bold",
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab3"
        component={Screen3}
        initialParams={{ tabName: "nong" }}
        options={{
          tabBarLabel: "Nóng",
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 13,
            fontWeight: "bold",
            width: 35,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab4"
        component={Screen3}
        initialParams={{ tabName: "moi" }}
        options={{
          tabBarLabel: "Mới",
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 13,
            fontWeight: "bold",
            width: 25,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab5"
        component={Screen3}
        initialParams={{ tabName: "tonghop" }}
        options={{
          tabBarLabel: "Tổng hợp",
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 13,
            fontWeight: "bold",
            width: 60,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab6"
        component={Screen3}
        initialParams={{ tabName: "sport" }}
        options={{
          tabBarLabel: "Bóng đá VN",
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 13,
            fontWeight: "bold",
            width: 51,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab7"
        component={Search}
        options={{
          tabBarShowLabel: false,
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab8"
        component={user}
        options={{
          tabBarShowLabel: false,
        }}
      />
    </MaterialTopTabs.Navigator>
  );
};


  