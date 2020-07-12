import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import SingnUp from './SingUp';
import LogIn from "./LogIn";
import Header from './Header';
import SignUp from "./SingUp";

const TabNavigator = createMaterialTopTabNavigator(
  {
    LogIn: {
      screen: LogIn
    },
    SingUp: {
      screen: SignUp
    },
  },
  {
    // swipeEnabled:false,
    tabBarComponent: Header,
    tabBarOptions: {
      scrollEnabled: true,
    },
    initialRouteName: "LogIn",
  }
);

const LogInNavigation = createAppContainer(TabNavigator);

export default LogInNavigation;
