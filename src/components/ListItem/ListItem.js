import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
 
const ListItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onItemPressed} 
      style={styles.listItem}
    >
      <Text>{props.placeName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default ListItem;