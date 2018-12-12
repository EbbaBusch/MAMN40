import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class DabasGet extends Component {
  state = {
    data: '',
    products: []   
}

  render() {
    fetch('http://api.dabas.com/DABASService/V2/article/gtin/0' + this.props.artNum + '/JSON?apikey=e7886b21-bd2f-40e0-b7a1-625967c2679b', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.Artikelbenamning);
        this.setState({
          data: responseJson,
          products: [responseJson.Artikelbenamning]
        })
      })
      .catch((error) => {
        console.error(error);
      });

      return (
        <Text>
            {this.state.products}
        </Text>
      )
  }
}