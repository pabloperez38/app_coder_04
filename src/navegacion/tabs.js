import CarritoNavigator from "./carrito";
import OrdenesNavigator from "./ordenes";
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
      <BottomTab.Screen name="Shop" component={ShopNavigator} />
      <BottomTab.Screen name="Carrito" component={CarritoNavigator} />
      <BottomTab.Screen name="Ordenes" component={OrdenesNavigator} />
    </BottomTab.Navigator>
  );
};

export default Tabs;
