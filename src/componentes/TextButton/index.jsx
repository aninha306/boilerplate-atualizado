import { Text } from "react-native";
import styles from "./styles";

const AnaText = ({text}) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};

export default AnaText;