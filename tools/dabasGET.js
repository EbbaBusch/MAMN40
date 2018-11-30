import fetch from 'react-native'

async function getMoviesFromApi() {
    try {
      let response = await fetch(
        'http://api.dabas.com/DABASService/V2/article/gtin/05707381014040/JSON?apikey=e7886b21-bd2f-40e0-b7a1-625967c2679b',
      );
      let responseJson = await response.json();
      return responseJson.Artikelbenamning;
    } catch (error) {
      console.error(error);
    }
  }

  export default { getMoviesFromApi }
