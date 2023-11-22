import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; //
import { MaterialTopTabsScreenNews } from "../View/MaterialTopTabsNew.js";
import { MaterialTopTabsScreenVideo } from "../View/MaterialTopTabsVideo.js";
import { abc } from "../View/MaterialTopTabsTrend.js"; 

import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";
import utilities from "../screens/utilities"

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
      component={Screen4}
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
      component={Screen5}
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
      component={utilities}
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
