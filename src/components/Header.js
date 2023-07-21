import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View
      style={{
        padding: 12,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'blue',
      }}>
      <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
