import {
  ActivityIndicator,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';

const ScreenNode = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  const getQuestions = async page => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.stackexchange.com/search/advanced?site=stackoverflow.com&q=node.js&page=${page}&pagesize=10`,
      );
      const json = await response.json();
      setData([...data, ...json?.items]);
      setPageNumber(parseInt(page) + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions(pageNumber);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header title={' Node Js Questions'} />
      <FlatList
        data={data || []}
        renderItem={({item}) => {
          return (
            <View style={styles.questBtn}>
              <Text style={styles.questTxt}>Question  :- </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item?.link || '');
                }}>
                <Text style={styles.title}>{item?.title} ?</Text>
                <Text style={styles.clickTxt}>Click to View Answer</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (pageNumber <= 25) {
            getQuestions(pageNumber);
          }
        }}
      />
      {isLoading && <ActivityIndicator size={'large'} />}
    </View>
  );
};

export default ScreenNode;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'black',
  },
  questBtn: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 12,
    borderColor: 'gray',
    borderRadius: 12,
    margin: 12,
  },
  clickTxt: {
    fontSize: 12,
    color: 'blue',
    width: '100%',
    textAlign: 'right'
  },
  questTxt: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
    width: '100%',
    textAlign: 'left'
  }
});
