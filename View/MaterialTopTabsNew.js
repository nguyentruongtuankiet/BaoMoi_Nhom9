import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; //
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

export const MaterialTopTabsScreenNews = ({navigation}) => (
  <MaterialTopTabs.Navigator
    tabBarOptions={{
      scrollEnabled: true,
      tabStyle: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center", // Căn giữa theo chiều dọc
        width: "auto",
        padding: 10,
      },
    }}
  >
   <MaterialTopTabs.Screen
      name="Tab1"
      component={Screen3}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="list-ul" color={color} size={25} />
        ),
      }}
    />
    <MaterialTopTabs.Screen
      name="Tab2"
      component={Screen3}
      options={{
        tabBarLabel: "Cho bạn", // Chữ in thường
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
      options={{
        tabBarLabel: "Mới", // Chữ in thường
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
      options={{
        tabBarLabel: "Tổng hợp", // Chữ in thường
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
      options={{
        tabBarLabel: "Bóng đá VN", // Chữ in thường
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
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={25} />
        ),
      }}
    />
    <MaterialTopTabs.Screen
      name="Tab8"
      component={user}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={25} />
        ),
        tabBarButton: (props) => (
          <TouchableOpacity
            {...props}
            onPress={() => navigation.navigate("user")}
          >
            <Icon name="user" color={props.color} size={25} />
          </TouchableOpacity>
        ),
      }}
    />
  </MaterialTopTabs.Navigator>
);
  