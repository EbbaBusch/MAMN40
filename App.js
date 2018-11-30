import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { getMoviesFromApi } from './tools/dabasGET'

// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'

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
  render () {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View>

        <View style = {styles.scanner}>
          <BarcodeScannerExample/>
        </View>

        <View>
          <Text style = {styles.text}>{console.log(function () => this.getMoviesFromApi)}Barcode Scanner</Text>
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
