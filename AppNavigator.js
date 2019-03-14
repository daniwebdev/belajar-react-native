import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/LoginScreen";


const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen}
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;