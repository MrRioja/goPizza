import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@src/screens/Home";
import { Product } from "@src/screens/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
    </Navigator>
  );
}
