import React from 'react';
import { View, StyleSheet } from 'react-native';

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
  placeDeletedHandler = (index) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          if(index !== i) {
            return place
          }
        })
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
          onItemDeleted={this.placeDeletedHandler}
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