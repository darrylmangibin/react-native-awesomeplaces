import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {

  state = {
    placeName: ''
  }

   placeNameChangedHandler = (event) => {
     this.setState({
       placeName: event
     })
   }

   addPlacehandler = (placeName) => {
     this.props.addPlacehandler(placeName);
     this.setState({ placeName: '' })
   }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="An awesome places"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          onPress={() => this.addPlacehandler(this.state.placeName)} 
          style={styles.placeButton}
          title="Add"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%'
  },
  placeInput: {
    width: '70%',
    borderBottomWidth: 1
  },
  placeButton: {
    width: '30%'
  },
})

export default PlaceInput;