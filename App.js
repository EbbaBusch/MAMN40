import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { BarcodeScan } from '../Scanner'
import BarcodeScannerExample from './Scanner'

export default class App extends React.Component {
  render () {
    return (
      <BarcodeScannerExample></BarcodeScannerExample>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
