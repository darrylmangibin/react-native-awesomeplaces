import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
    console.log(this.state.placeName)
  }
  placeSubmitHandler = () => {
    if (this.state.placeName === '') {
      return;
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(this.state.placeName)
      }
    })
  }
  render() {
    const placesOutput = this.state.places.map((place, i) => {
      return (
        <Text key={i}>{place}</Text>
      )
    })
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button 
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 26
  }, 
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
  }
});

export default App;