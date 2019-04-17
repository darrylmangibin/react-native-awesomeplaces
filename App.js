import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
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
          image: {
            uri: 'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
          }
        })
      }
    })
  }
  placeSelectedHandler = (key) => {
    this.setState((prevState) => {
      return {
        selectedPlace: prevState.places.find((place) => {
          if(place.key === key) {
            return place
          }
        })
      }
    })
  }

  placeDeletedHandler = () => {
      this.setState((prevState) => {
        return {
          places: prevState.places.filter((place) => {
            if(place.key !== prevState.selectedPlace.key) {
              return place
            }
          }),
          selectedPlace: null
        }
      })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail 
        selectedPlace={this.state.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}
      />
        <PlaceInput 
          addPlaceHandler={this.placeSubmitHandler}
        />
        <PlaceList 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
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