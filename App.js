import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

class App extends React.Component {

  state = {
    places: []
  }

  addPlacehandler = (placeName) => {
    if(placeName.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: placeName
        }),
      }
    });
  }

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key
        })
      }
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <PlaceInput 
          addPlacehandler={this.addPlacehandler}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 26
  }
});

export default App;