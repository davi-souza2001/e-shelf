import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import google from '../../assets/google.png'

export default function App(props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('Home')}
    >
      <Image source={google} style={styles.logo_google} />
      <Text>Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#C1AA8B',
    borderRadius: 100,
  },
  logo_google: {
    width: 20,
    height: 20,
  },
});
