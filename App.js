import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/beautiful-place.jpg';

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
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: placeImage
        })
      }
    })
  }
  placeDeletedHandler = (key) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place, i) => {
          if(place.key !== key) {
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