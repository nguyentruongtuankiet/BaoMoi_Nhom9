import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; //
import { MaterialTopTabsScreenNews } from "../View/MaterialTopTabsNew.js";
import { MaterialTopTabsScreenVideo } from "../View/MaterialTopTabsVideo.js";
import { abc } from "../View/MaterialTopTabsTrend.js"; 

import Screen3 from "../screens/Screen3";

const TabBottom = createBottomTabNavigator();

export const TabScreen = () => (
  <TabBottom.Navigator>
    <TabBottom.Screen
      name="Tin tức"
      component={MaterialTopTabsScreenNews}
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
      component={MaterialTopTabsScreenVideo}
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
      component={abc}
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
