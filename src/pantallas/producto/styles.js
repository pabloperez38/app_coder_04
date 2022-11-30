import { StyleSheet } from "react-native";
import { colores } from "../../constantes/tema/colores";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colores.fondo,
  },
  titulo: {
    fontFamily: "Sora-Bold",
    fontSize: 18,
    color: colores.negro,
  },
});
