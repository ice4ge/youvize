import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageTabNavigator from "./HomePageTabNavigator";
import NavigationNames from "./NavigationNames";
import { useLocalization } from "../localization";
import LogInComponent from '../components/LogInComponent';
import {BookAppointmentScreen} from '../screens/BookAppointment';
import {ProfileScreen} from '../screens/profile';
import { ConfirmPaymentScreen } from '../screens/Pay&Confirm';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NavigationNames.LogInScreen} component={LogInComponent} />
        <Stack.Screen name={NavigationNames.ProfileScreen} component={ProfileScreen}/>
        <Stack.Screen name={NavigationNames.BookAppointmentScreen} component={BookAppointmentScreen} />
        <Stack.Screen name={NavigationNames.ConfirmPaymentScreen} component={ConfirmPaymentScreen} />
        <Stack.Screen name={"Root"} component={HomePageTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
