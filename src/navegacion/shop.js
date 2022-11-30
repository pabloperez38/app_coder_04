import { Categorias, Producto, Productos } from "../pantallas";

import React from "react";
import { colores } from "../constantes/tema/colores";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        headerStyle: { backgroundColor: colores.secundario },
        headerTintColor: colores.blanco,
      }}
    >
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ title: "Categorías" }}
      />
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Producto" component={Producto} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
