import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; //

import Screen5 from "../screens/Screen5";



const MaterialTopTabs = createMaterialTopTabNavigator();

export const abc = () => (
    <MaterialTopTabs.Navigator
      tabBarOptions={{
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly", // Canh đều các tab theo chiều ngang
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="Tab1"
        component={Screen5}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-ul" color={color} size={19} />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab2"
        component={Screen5}
        options={{
          tabBarLabel: "Cho bạn", // Chữ in thường
          tabBarLabelStyle: {
            width: 45,
            textTransform: "none",
            fontSize: 11,
            fontWeight: "bold",
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab3"
        component={Screen5}
        options={{
          tabBarLabel: "Nóng",
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 11,
            fontWeight: "bold",
            width: 30,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab4"
        component={Screen5}
        options={{
          tabBarLabel: "Mới", // Chữ in thường
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 11,
            fontWeight: "bold",
            width: 21,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab5"
        component={Screen5}
        options={{
          tabBarLabel: "Tổng hợp", // Chữ in thường
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 11,
            fontWeight: "bold",
            width: 53,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab6"
        component={Screen5}
        options={{
          tabBarLabel: "Bóng đá", // Chữ in thường
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 11,
            fontWeight: "bold",
            width: 50,
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab7"
        component={Screen5}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={19} />
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="Tab8"
        component={Screen5}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={19} />
          ),
        }}
      />
    </MaterialTopTabs.Navigator>
  );
  