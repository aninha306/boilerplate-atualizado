import { View, Text,  } from 'react-native'
import styles from './styles'
import MyButton from '../../componentes/MyButton'


export default function Totoro() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Neighbor Totoro</Text>
            <MyButton screen={'Home'} name={'Back to Home'}/>
            <MyButton screen={'Ghibli'} name={'Go to Ghibli'} />
        </View>
    )
}