import { Button, Text, View } from "react-native";

import { COLORES } from "../../constantes/tema/colores";
import React from "react";
import { styles } from "./styles";

const Productos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos</Text>
      <Button
        title="Ir a producto"
        color={COLORES.secundario}
        onPress={() => navigation.navigate("Producto")}
      />
    </View>
  );
};

export default Productos;
