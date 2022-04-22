import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Tienda de vinos online</Text>
      <TextInput placeholder='Ingrese el vino' style={{color:'#ffff', backgroundColor:'#EBC7C7', padding: 20}} />
      <Button title='Add' style={styles.Button} />
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
    fontSize: 16,
    color: '#EBC7C7',
  }, 
  Button: {
    width:100,
    backgroundColor:'#ffff',
  }
});
