import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // Thay "FontAwesome" bằng tên tương ứng với thư viện biểu tượng bạn đang sử dụng

import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
// import Screen3 from "./screens/Screen3";
// import Screen4 from "./screens/Screen4";
// import Screen5 from "./screens/Screen5";
import { TabScreen } from "./View/ViewBottomTab.js"

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
