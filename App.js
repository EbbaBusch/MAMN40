import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'

export default class App extends React.Component {
  render () {
    return (
      <View>

        <View style = {styles.scanner}>
          <BarcodeScannerExample/>
        </View>

        <View>
          <Text style = {styles.text}>Barcode Scanner</Text>
        </View>
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  scanner: {
    height: 200
  },
  text: {
    fontSize: 32,
    textAlign: 'center'
  }
})
