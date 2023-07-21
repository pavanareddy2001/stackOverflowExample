import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
