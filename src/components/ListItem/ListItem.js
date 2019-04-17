import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  }
});

export default ListItem