import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from "@expo-google-fonts/nunito";

import Routes from "./src/routes/AppStack";

const App = () => {
  const [apiReady, setApiReady] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setApiReady(true)
    }, 4000);
    return () => clearTimeout(timer)
  }, [])

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) return null;

  return apiReady ? <Routes /> : (
    <View style={styles.container}>
      <Image style={styles.img}
        source={require('./assets/splash.png')}
      />
      <Text style={styles.text}>Stockholm, Sweden.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#15C3D6',
    padding: 100
  },

  img: {
    width: 150,
    height: 150,
    marginTop: 150,
    resizeMode: "contain"

  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 100
  },
});

export default App
