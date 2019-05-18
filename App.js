import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

class App extends React.Component {

  state = {
    placeName: ''
  }

  placeNameChangedHandler = (event) => {
    this.setState({ placeName: event })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="An awesome places"
            value={this.state.palceName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.placeInput}
          />
          <Button 
            style={styles.placeButton}
            title="Add"
          />
        </View>
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
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%',
    borderBottomWidth: 1
  },
  placeButton: {  
    width: '30%'
  }
});

export default App;