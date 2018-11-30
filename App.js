import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'

export default class App extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View>

        <View style = {styles.scanner}>
          <BarcodeScannerExample/>
        </View>

        <View>
          <Text style = {styles.text}>Barcode Scanner</Text>
        </View>
        
      </View>
      </SafeAreaView>
    )
  }
}

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
