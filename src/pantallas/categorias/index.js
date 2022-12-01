import { Button, FlatList, SafeAreaView, Text, View } from "react-native";

import { CATEGORIAS } from "../../constantes/datos/index";
import { COLORES } from "../../constantes/tema/colores";
import ItemCategoria from "../../componentes/item-categoria";
import React from "react";
import { styles } from "./styles";

const Categorias = ({ navigation }) => {
  const onSelected = (item) => {
    console.warn("onSelected", item);
  };
  const renderItem = ({ item }) => (
    <ItemCategoria item={item} onSelected={onSelected} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIAS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categorias;
