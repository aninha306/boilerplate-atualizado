import { View, } from 'react-native'
import styles from './styles';
import MyButton from '../../componentes/MyButton';
import Title from '../../componentes/Title';

export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <MyButton screen={'Home'} name={'Go to Home'} />
      <MyButton screen={'Totoro'} name={'Go to Totoro'} />
    </View>
  )
}