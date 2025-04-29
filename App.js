import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuListScreen from './screens/MenuListScreen';
import AddItemFormScreen from './screens/AddItemFormScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createStackNavigator();

export default function App() {
  const [cart, setCart] = React.useState([]); // Initialised as an empty array
  const [favorites, setFavorites] = React.useState([]); // Intialised as an empty array

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MenuList">
          {() => (
            <MenuListScreen
              cart={cart} // Passing cart as a prop
              setCart={setCart} //adds items to cart
              favorites={favorites} // Passing favorites as a prop
              setFavorites={setFavorites} //adds an item to the favorites list
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddItemForm" component={AddItemFormScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}