import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Theme } from "../theme";
import NavigationNames from "./NavigationNames";
import { useLocalization } from "../localization";
import { stackScreenOptions, tabScreenOptions } from "./NavigationHelper";
import { HeaderComponent } from "../components/header";
import {
  HomeScreen,
  ProfileScreen,
  MenuScreen,
  CalendarScreen,
  CampaignListScreen,
  CampaignDetailScreen,
  DepartmentListScreen,
  DepartmentDetailScreen,
  MediaDetailScreen,
  NewAppointmentScreen,
  DoctorListScreen,
  DoctorDetailScreen,
  EventListScreen,
  PaymentSuccessScreen,
  NotificationScreen,
  MediaScreen,
} from "../screens";
import { ToolbarBrandLogo } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  const { getString } = useLocalization();
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.HomeScreen}
        component={HomeScreen}
        options={{ headerTitle: () => <ToolbarBrandLogo /> }}
      />
      <Stack.Screen
        name={NavigationNames.CampaignListScreen}
        component={CampaignListScreen}
        options={{ title: getString("Campaigns") }}
      />
      <Stack.Screen
        name={NavigationNames.CampaignDetailScreen}
        component={CampaignDetailScreen}
      />
      <Stack.Screen
        name={NavigationNames.DepartmentListScreen}
        component={DepartmentListScreen}
        options={{ title: getString("Our Departments")}}
      />
      <Stack.Screen
        name={NavigationNames.DepartmentDetailScreen}
        component={DepartmentDetailScreen}
      />
      <Stack.Screen
        name={NavigationNames.NewAppointmentScreen}
        component={NewAppointmentScreen}
        options={{ title: getString("New Appointment") }}
      />
      <Stack.Screen
        name={NavigationNames.DoctorDetailScreen}
        component={DoctorDetailScreen}
      />
      <Stack.Screen
        name={NavigationNames.MenuScreen}
        component={MenuScreen}
        options={{ title: getString("Menu") }}
      />
      <Stack.Screen
        name={NavigationNames.ProfileScreen}
        component={ProfileScreen}
        options={{ title: getString("Profile") }}
      />
      <Stack.Screen
        name={NavigationNames.PaymentSuccessScreen}
        component={PaymentSuccessScreen}
        options={{ title: getString("Profile") }}
      />
    </Stack.Navigator>
  );
};

const CalendarTabStack = () => {
  const { getString } = useLocalization();
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.NotificationScreen}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

const MediaTabStack = () => {
  const { getString } = useLocalization();
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.MediaScreen}
        component={MediaScreen}
        options={{ title: getString("Media") }}
      />
    </Stack.Navigator>
  );
};

const ProfileTabStack = () => {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.ProfileScreen}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MenuTabStack = () => {
  const { getString } = useLocalization();
  return (
    <Stack.Navigator headerMode="screen" screenOptions={stackScreenOptions}>
      <Stack.Screen
        name={NavigationNames.DoctorListScreen}
        component={DoctorListScreen}
        options={{ title: getString("Doctors") }}
      />
    </Stack.Navigator>
  );
};

const HomePageTabNavigator = () => (
  <Tab.Navigator
    screenOptions={tabScreenOptions}
    tabBarOptions={{
      activeTintColor: Theme.colors.primaryColor,
      inactiveTintColor: Theme.colors.gray,
      activeBackgroundColor: "#EDF9F1",
      inactiveBackgroundColor: "#F8F8F8",
      style: {
        backgroundColor: '#fff',
        position: "absolute",
        height: 70,
        borderRadius: 20,
        marginHorizontal: 15,
        marginBottom: 19,
      },
      tabStyle: {
        borderRadius: 10,
        height: 40,
        width: 40,
        marginHorizontal: 14,
        marginTop: 10,
      },
      labelStyle: {
        position: "absolute",
        top: 40,
        width: 69,
      }
    }}
  >
    <Tab.Screen name={NavigationNames.DashBoardTab} component={HomeTabStack} />
    <Tab.Screen
      name={NavigationNames.CalendarTab}
      component={CalendarTabStack}
    />
    <Tab.Screen name={NavigationNames.MediaTab} component={MediaTabStack} />
    <Tab.Screen name={NavigationNames.ProfileTab} component={ProfileTabStack} />
    <Tab.Screen name={NavigationNames.MenuTab} component={MenuTabStack} />
  </Tab.Navigator>
);

export default HomePageTabNavigator;
