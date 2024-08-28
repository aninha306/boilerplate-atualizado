import { View, Text, } from 'react-native'
import styles from './styles';
import MyButton from '../../componentes/MyButton';
import Title from '../../componentes/Title';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <MyButton screen={'Totoro'} name={'Go to Totoro'} />
      <MyButton screen={'Ghibli'} name={'Go to Ghibli'} />
    </View>
  )
}