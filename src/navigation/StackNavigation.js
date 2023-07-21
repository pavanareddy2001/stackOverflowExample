import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import BottomTabNavigation from './BottomTabNavigation';

const StackNavigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
