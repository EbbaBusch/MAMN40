import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
//import getFoodData, { getMoviesFromApi } from './tools/dabasGET'

// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'
import DabasGET from './components/dabasGET'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Insights!</Text>
      </View>
    );
  }
}

class ScannerScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {artNumScanner: null};
  }
  myCallback = (artNumFromScanner) => {
    this.setState({ artNumScanner: artNumFromScanner });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View>

          <View style={styles.scanner}>
            <BarcodeScannerExample callbackFromParent={this.myCallback}/>
          </View>

          <View>
            <Text style={styles.text}>{this.state.artNumScanner}</Text>
          </View>

          <View>
            <DabasGET artNum={this.state.artNumScanner} />
          </View>

        </View>
      </SafeAreaView>
    )
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Insights: HomeScreen,
  Scanner: ScannerScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eee'
  },
  scanner: {
    height: 200
  },
  text: {
    fontSize: 32,
    textAlign: 'center'
  }
})
