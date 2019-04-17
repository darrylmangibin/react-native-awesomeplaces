import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class App extends React.Component {
  state = {
    placeName: ''
  }
  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
    console.log(this.state.placeName)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{width: 300}}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
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
  }
});

export default App;