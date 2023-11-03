import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Thay "FontAwesome" bằng tên tương ứng với thư viện biểu tượng bạn đang sử dụng

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="screen3"
          component={TabScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabScreen = () => (
  <TabBottom.Navigator>
    <TabBottom.Screen
      name="Tin tức"
      component={MaterialTopTabsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="newspaper-o" color={color} size={size} />
        ),

        tabBarLabelStyle: {
          fontSize: 13, // Chỉnh kích thước của chữ
        },
      }}
    />
    <TabBottom.Screen
      name="Video"
      component={MaterialTopTabsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="video-camera" color={color} size={size} />
        ),

        tabBarLabelStyle: {
          fontSize: 13, // Chỉnh kích thước của chữ
        },
      }}
    />
    <TabBottom.Screen
      name="Xu hướng"
      component={MaterialTopTabsScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="arrow-up" color={color} size={size} />
        ),

        tabBarLabelStyle: {
          fontSize: 13, // Chỉnh kích thước của chữ
        },
      }}
    />
    <TabBottom.Screen
      name="Tiện ích"
      component={Screen3}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="th-large" color={color} size={size} />
        ),

        tabBarLabelStyle: {
          fontSize: 13, // Chỉnh kích thước của chữ
        },
      }}
    />
  </TabBottom.Navigator>
);
const MaterialTopTabsScreen = () => (
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
      component={Screen3}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="list-ul" color={color} size={19} />
        ),
      }}
    />
    <MaterialTopTabs.Screen
      name="Tab2"
      component={Screen3}
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
      component={Screen3}
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
      component={Screen3}
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
      component={Screen3}
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
      component={Screen3}
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
      component={Screen3}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="search" color={color} size={19} />
        ),
      }}
    />
    <MaterialTopTabs.Screen
      name="Tab8"
      component={Screen3}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={19} />
        ),
      }}
    />
  </MaterialTopTabs.Navigator>
);
