import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import CategoriaProduto from "../screens/CategoriaProduto";

const Stack = createNativeStackNavigator();
export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Cardápio Digital" }}
        />
        <Stack.Screen
          name="Categoria"
          component={CategoriaProduto}
          options={({ route }) => ({title: route.params.categoria.toUpperCase()})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
