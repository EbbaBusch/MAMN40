import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
//import getFoodData, { getMoviesFromApi } from './tools/dabasGET'

// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'
import DabasGET from './tools/dabasGET'

class HomeScreen extends React.Component {
  render () {
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

          <View style={styles.scanner}>
            <BarcodeScannerExample />
          </View>

          <View>
            <Text style={styles.text}>Barcode Scanner</Text>
          </View>

          <View><DabasGET></DabasGET></View>

        </View>
      </SafeAreaView>
    )
  }
}

class SettingsScreen extends React.Component {
  render () {
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
