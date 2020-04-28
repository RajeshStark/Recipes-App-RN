import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import SearchComponent from './src/components/Searchbar';
import ItemRecipe from './src/components/ItemRecipe';
import RandomMeal from './src/components/RandomMeal';
import CategoryList from './src/components/CategoryList';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Searchbar" component={SearchComponent} />
      <Stack.Screen name="ItemRecipe" component={ItemRecipe} />
      <Stack.Screen name="RandomMeal" component={RandomMeal} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
