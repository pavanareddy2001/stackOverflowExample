import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenReact from '../screens/ScreenReact';
import ScreenReactNative from '../screens/ScreenReactNative';
import ScreenNode from '../screens/ScreenNode';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarLabel: 'React',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../images/react.png')}
                style={{height: 25, width: 25}}
              />
            ),
          }}
          name="React"
          component={ScreenReact}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'React Native',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../images/reactnative.png')}
                style={{height: 25, width: 25}}
              />
            ),
          }}
          name="ReactNative"
          component={ScreenReactNative}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Node',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../images/node.png')}
                style={{height: 25, width: 25}}
              />
            ),
          }}
          name="Node"
          component={ScreenNode}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
