import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const {Navigator, Screen} = createNativeStackNavigator();

import Home from './src/pages/home';
import Departamento from './src/pages/departamento';
import Cardapio from './src/pages/cardapioRu';
import GruposDeExtensao from './src/pages/gruposDeExtensao';
import Salas from './src/pages/navegacaoSalas';

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Navigator screenOptions={ {headerShown: false} }>
        <Screen name="Home" component={Home} />
        <Screen name="Departamento" component={Departamento} />
        <Screen name="Cardapio" component={Cardapio} />
        <Screen name="GruposDeExtensao" component={GruposDeExtensao} />
        <Screen name="Salas" component={Salas} />
      </Navigator>
    </NavigationContainer>
  );
}
