import { View, Text, } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Totoro")}>
        <Text style={styles.botao}>Go to Totoro</Text>
      </TouchableOpacity>
    </View>
  )
}