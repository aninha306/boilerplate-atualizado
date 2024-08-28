import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';
import AnaText from '../TextButton';
import styles from './styles';

const MyButton = ({ screen, name }) => {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity styles={styles.botao} onPress={() =>
            Navigation.navigate(screen)}>
            <AnaText text ={name}/>
        </TouchableOpacity>
    );
};

export default MyButton