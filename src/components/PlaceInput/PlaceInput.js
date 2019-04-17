import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {
  state = {
    placeName: ''
  }
  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button 
          style={styles.placeButton}
          title="Add"
          onPress={() => this.props.addPlaceHandler(this.state.placeName)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
})

export default PlaceInput;