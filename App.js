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

  addPlacehandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName,
          image: {
            uri: 'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
          }
        }),
      }
    });
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key
        })
      }
    })
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place) => {
    //       return place.key !== key
    //     })
    //   }
    // })
  }

  placeDeletedHandler = () => {
    console.log(this.state)
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  modalClosedHandler = () => {
    this.setState(prevState => {
      return {
        selectedPlace: null
      }
    })
  }

  render(){
    console.log(this.state)
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace= {this.state.selectedPlace}
          onItemDeleted ={this.placeDeletedHandler}
          onModalClosed = {this.modalClosedHandler}
        />
        <PlaceInput 
          addPlacehandler={this.addPlacehandler}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 26
  }
});

export default App;