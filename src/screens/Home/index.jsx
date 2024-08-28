import { View, Text, } from 'react-native'
import styles from './styles';
import MyButton from '../../componentes/MyButton';
import Title from '../../componentes/Title';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <Text>Olá, somos Ana júlia e isabela alcantara, nós duas temos 18 anos e fazemos o mesmo curso do senai (DS), amamos música e assistir crepúsculo no frio,
        somos duas formigas que ama doce, amamos cachorro quente e ficar sem fazer sempre que possivel. </Text>
      <Text> filmes favoritos (Ana): Crepúsculo</Text>
      <Text> filmes favoritos (isa): Enrolados </Text>

      <MyButton screen={'Totoro'} name={'Crepúsculo'} />
      <MyButton screen={'Ghibli'} name={'Enrolados'} />
    </View>
  )
}