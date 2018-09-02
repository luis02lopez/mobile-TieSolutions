import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {

  render() {
    setInterval(() => {
        this.props.navigation.navigate('Presentation');
    }, 5000);
    return (
        <ImageBackground style={styles.containerSplash} source={require('./assets/fondo.png')}>
          <Image source={require('./assets/Group.png')}>
          </Image>
        </ImageBackground>
    );
  }
}

class PresentationScreen extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
    <View style={{ flex: 1 }}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./assets/servishero_loading.json')}
      />
        <Button
            title="Nuevo Xpense"
            onPress={() => this.props.navigation.navigate('User')}
          />
      </View>
    );
  }
}

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Presentation: PresentationScreen,
    User: UserScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

