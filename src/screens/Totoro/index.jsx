import { View, Text,  } from 'react-native'
import styles from './styles'
import MyButton from '../../componentes/MyButton'


export default function Totoro() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre Ana e seu filme favorito</Text>
           
            <View>
               <Text>ANA:
                Tenho 18 anos, faço aniversario dia 30/06, amo dormir, ouvir músicas, ver filmes, sair com meu namorado e amigos, adoro ficar sozinha em casa fazendo minhas coisas.
                Principalmente assitindo meu filme favoritro:

                CREPÚSCULO.
               </Text>
               <Text>
               A estudante Bella Swan conhece Edward Cullen, um belo mas misterioso adolescente. 
               Edward é um vampiro, cuja família não bebe sangue, e Bella, longe de ficar assustada, 
               se envolve em um romance perigoso com sua alma gêmea imortal. </Text>
               <Text>
               Data de lançamento: 19 de dezembro de 2008 (Brasil)
               </Text>
            </View>

            <MyButton screen={'Home'} name={'Voltar para a Home'}/>
        </View>
    )
}