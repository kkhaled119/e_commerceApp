// In App.js in a new project

import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product_Details" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
