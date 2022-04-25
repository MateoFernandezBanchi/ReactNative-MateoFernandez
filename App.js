import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Tienda de vinos online</Text>
      <Image style={styles.Image} source={{uri:'https://mendozatour.files.wordpress.com/2012/08/gal2.jpg'}} />
      <View style= {styles.searchContainer}>
      <TextInput placeholder='Ingrese el vino' style={styles.Input} />
      <Button title='Buscar' style={styles.Button} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B0A29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 20,
    color: '#EBC7C7',
    paddingBottom:15
  }, 
  Button: {
    backgroundColor:'#ffff',
    padding:12,
  }, 
  Input: {
    color:'#ffff', 
    backgroundColor:'#EBC7C7',
    padding: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:20
  },
  Image: {
    width: 200,
    height:200
  }
});
