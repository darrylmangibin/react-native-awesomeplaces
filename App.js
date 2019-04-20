import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deselectPlace, deletePlace, selectPlace } from './src/store/actions/index';

class App extends React.Component {
  placeSubmitHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  }
  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key)
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace()
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
      <PlaceDetail 
        selectedPlace={this.props.selectedPlace}
        onItemDeleted={this.placeDeletedHandler}
        onModalClosed={this.modalClosedHandler}
      />
        <PlaceInput 
          addPlaceHandler={this.placeSubmitHandler}
        />
        <PlaceList 
          places={this.props.places}
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => {
      return dispatch(addPlace(name))
    },
    onDeletePlace: () => {
      return dispatch(deletePlace())
    },
    onSelectPlace: (key) => {
      return dispatch(selectPlace(key))
    },
    onDeselectPlace: () => {
      return dispatch(deselectPlace())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);