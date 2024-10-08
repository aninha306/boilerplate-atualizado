import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Totoro from "../screens/Totoro";
import Ghibli from "../screens/Ghibli";

const Stack = createNativeStackNavigator();

const StackRoutes = () => { 
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ana" component={Totoro}/>
        <Stack.Screen name="Isa" component={Ghibli}   />
         </Stack.Navigator>
    );
}

export default StackRoutes;