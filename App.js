import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/pages/home';

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator screenOptions={ {headerShown: false} }>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
