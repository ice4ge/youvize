import React from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faHome, faCalendarAlt, faCommentAlt, faBriefcase, faSearch, faCommentSlash, faComment, faCommentMedical } from '@fortawesome/free-solid-svg-icons';
import { useLocalization } from "../localization";
import NavigationNames from "./NavigationNames";
import { Theme } from "../theme";
import { View, Text } from "react-native";
import { Props } from "react-native-image-zoom-viewer/built/image-viewer.type";
import { BookAppointmentScreen } from "src/screens";

const getTabTitle = (routeName: string): string => {
  const { getString } = useLocalization();
  if (routeName === NavigationNames.DashBoardTab) {
    return getString("DashBoard");
  } else if (routeName === NavigationNames.CalendarTab) {
    return getString("Messages");
  } else if (routeName === NavigationNames.MediaTab) {
    return getString("Calendar");
  } else if (routeName === NavigationNames.ProfileTab) {
    return getString("Appointments");
  } else if (routeName === NavigationNames.MenuTab) {
    return getString("Search");
  }
  return "";
};

export const tabScreenOptions: (props: {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
  navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
  title: getTabTitle(route.name),
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = faCoffee;
    let badgeCount = 0;
    switch (route.name) {
      case NavigationNames.DashBoardTab:
        iconName = faHome;
        break;
      case NavigationNames.CalendarTab:
        iconName = faCommentAlt;
        badgeCount= 2;
        break;
      case NavigationNames.MediaTab:
        iconName = faCalendarAlt;
        break;
      case NavigationNames.ProfileTab:
        iconName = faBriefcase;
        break;
      case NavigationNames.MenuTab:
        iconName = faSearch;
        break;
    }
    return <View style={{ width: 24, height: 24, margin: 5 }}>
      <FontAwesomeIcon icon={iconName} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>;
  }
});

export const stackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: "#FAFAFA",
  }
};
