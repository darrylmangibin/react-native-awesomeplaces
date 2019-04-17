import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
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