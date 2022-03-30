import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';
import useTheme from '../utils/useTheme';

import HomeScreen from '../scenes/home';
import DetailScreen from '../scenes/detail';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const theme = useTheme();

  useEffect(() => {
    AsyncStorage.getItem('theme').then(str => {
      theme.setTheme(str == 'dark' ? 'dark' : 'light');
    });
    SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
