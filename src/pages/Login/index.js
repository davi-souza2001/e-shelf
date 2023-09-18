import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import logo from '../../../assets/logo.png'

import GoogleButton from '../../components/google_button.js'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Sua Biblioteca Digital Pessoal</Text>
      <View style={styles.bar}></View>
      <Text style={styles.text}>Entre com</Text>
      <GoogleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEAE2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: '#C1AA8B',
  },
  bar: {
    width: 250, 
    height: 5, 
    backgroundColor: '#D0BFA8',
    borderRadius: 100,
  },
});
