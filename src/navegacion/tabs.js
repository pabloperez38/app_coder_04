import React from "react";
import ShopNavigator from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="ShopTab" component={ShopNavigator} />
    </BottomTab.Navigator>
  );
};

export default Tabs;
