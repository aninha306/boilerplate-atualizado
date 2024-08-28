import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';
import AnaText from '../TextButton';

const MyButton = ({ screen, name }) => {
    const Navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>
            Navigation.navigate(screen)}>
            <AnaText text ={name}/>
        </TouchableOpacity>
    );
};

export default MyButton