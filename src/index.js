import { ActivityIndicator, View } from "react-native";

import AppNavigator from "./navegacion";
import { colores } from "./constantes/tema/colores";
import { styles } from "./styles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Sora-Regular": require("../assets/fuentes/Sora-Regular.ttf"),
    "Sora-Bold": require("../assets/fuentes/Sora-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color={colores.secundario} size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}
