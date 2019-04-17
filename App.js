import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

class App extends React.Component {
  state = {
    places: []
  }
  placeSubmitHandler = (placeName) => {
    if (placeName === '') {
      return;
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          addPlaceHandler={this.placeSubmitHandler}
        />
        <PlaceList 
          places={this.state.places}
        />
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
});

export default App;