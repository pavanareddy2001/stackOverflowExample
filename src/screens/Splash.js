import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = props => {
  
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('BottomTabNavigation');
    }, 2000);
  }, []);
  
    return (
      <View style={styles.mainView}>
        <Image
          style={styles.stackImg}
          source={require('../images/stack-overflow.png')}
        />
      </View>
    );

};

export default Splash;

const styles = StyleSheet.create({
  mainView: {
    height: Dimensions.get('screen').height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stackImg: {
    width: 100,
    height: 100,
  },
});
