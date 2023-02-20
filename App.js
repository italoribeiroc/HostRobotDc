import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import Home from './src/pages/home';
import Departamento from './src/pages/departamento';
import Cardapio from './src/pages/cardapioRu';

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Navigator screenOptions={ {headerShown: false} }>
        <Screen name="Home" component={Home} />
        <Screen name="Departamento" component={Departamento} />
        <Screen name="Cardapio" component={Cardapio} />
      </Navigator>
    </NavigationContainer>
  );
}
