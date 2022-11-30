import { Button, Text, View } from "react-native";

import React from "react";
import { colores } from "../../constantes/tema/colores";
import { styles } from "./styles";

const Productos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos</Text>
      <Button
        title="Ir a producto"
        color={colores.secundario}
        onPress={() => navigation.navigate("Producto")}
      />
    </View>
  );
};

export default Productos;
