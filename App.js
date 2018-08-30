import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./assets/servishero_loading.json')}
      />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
