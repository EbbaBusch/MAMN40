import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class DabasGet extends Component {
  state = {
    data: ''
  }
  componentDidMount = () => {
    fetch('http://api.dabas.com/DABASService/V2/article/gtin/' + this.props.artNum + '/JSON?apikey=e7886b21-bd2f-40e0-b7a1-625967c2679b', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <Text>
        {this.state.data.Artikelbenamning}
      </Text>
    )
  }
}