import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pemesanan lokasi olahraga</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BerandaScreen from "./Screen/Beranda";
import InformasiScreen from "./Screen/Informasi";
import PemesananScreen from "./Screen/daftarPemesanan";
import ProfileScreen from "./Screen/profile";
import HistoryScreen from "./Screen/history";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Beranda"
          component={BerandaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Informasi"
          component={InformasiScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daftar Pemesanan"
          component={PemesananScreen}
          options={{ headerShown: false }}
       
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
