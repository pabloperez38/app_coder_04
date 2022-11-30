import { Button, Text, View } from "react-native";

import React from "react";
import { colores } from "../../constantes/tema/colores";
import { styles } from "./styles";

const Categorias = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorías</Text>
      <Button
        title="Ir a productos"
        color={colores.secundario}
        onPress={() => navigation.navigate("Productos")}
      />
    </View>
  );
};

export default Categorias;
