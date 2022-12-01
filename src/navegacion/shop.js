import { Categorias, Producto, Productos } from "../pantallas";

import { COLORES } from "../constantes/tema/colores";
import { Platform } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        headerStyle: { backgroundColor: COLORES.secundario },
        headerTintColor: COLORES.blanco,
      }}
    >
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ title: "Categorías" }}
      />
      <Stack.Screen
        name="Productos"
        component={Productos}
        options={{ title: "Nueva pantalla" }}
      />
      <Stack.Screen name="Producto" component={Producto} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
