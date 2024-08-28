import { View, Text, TextInput, } from 'react-native'
import styles from './styles';
import MyButton from '../../componentes/MyButton';
import Title from '../../componentes/Title';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';

export default function Ghibli() {
    const [nomeFilme, setNome] = useState("");
    const [Personagem, setPersonagem] = useState("");

    const cadastrar = () => {
        alert(`Nome do Filme: ${nomeFilme} - Personagem: ${Personagem}`)
    }
    return (
        <View style={styles.container}>
            <Title title="Sobre Isa e seu filme favorito" />
            

            <View>
               <Text>ISA:
                Tenho 18 anos, faço aniversario dia 7/4, amo ler, musicas, filmes, odeio silencio na maior parte do tempo mas amo ficar sozinha...
                principalmente assitindo meu filme favoritro:

                ENROLADOS.
               </Text>
               <View>
       

      
               </View>
               <Text>
               O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e acaba prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados e mágicos com 21 metros de comprimento, ela está trancada há anos e deseja desesperadamente a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante.
               </Text>
               <Text>
               Data de lançamento: 7 de janeiro de 2011 (Brasil)
               </Text>
            </View>

            <MyButton screen={'Home'} name={'Voltar para a Home'} />
        </View>
    )
}