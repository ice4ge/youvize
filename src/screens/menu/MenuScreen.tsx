import React, { useRef, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCommentDots,
  faArrowRight,
  faUserLock,
  faPenSquare,
  faCheckSquare,
  faChartPie,
  faChartBar,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Divider, TouchableHighlight } from "../../components";
import { Theme } from "../../theme";
import { useLocalization } from "../../localization";
import { SettingsBottomSheet } from "../../modals";
import NavigationNames from "../../navigations/NavigationNames";
import { useNavigation } from "@react-navigation/native";
import { HeaderComponent } from "../../components/header";
import { ScrollView } from "react-native-gesture-handler";
import GlobalFooter from "../../styles/GolobalFooter";

const getMenuItems = (getString: (key: string) => string) => [
  {
    title: getString("My Notifications"),
    iconName: faCommentDots,
    noteNumber: 1,
    navigateToScreen: NavigationNames.EventListScreen
  },
  {
    title: getString("Billing & Payment"),
    noteNumber: 12,
    iconName: faChartPie
  },
  {
    title: getString("Privacy & Security"),
    noteNumber: 3,
    iconName: faUserLock
  },
  {
    title: getString("My Account Info"),
    noteNumber: 1,
    iconName: faPenSquare,
    navigateToScreen: NavigationNames.ProfileScreen
  },
  {
    title: getString("Get Verified"),
    noteNumber: 5,
    iconName: faCheckSquare
  },
  {
    title: getString("My Earnings & Balance"),
    noteNumber: 12,
    iconName: faChartBar
  },
  {
    title: getString("Contact Support"),
    iconName: faQuestionCircle
  },
  {
    title: getString("Logout"),
    iconName: faSignOutAlt,
    openSettings: true
  }
];

type TProps = {};

export const MenuScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();
  const { getString } = useLocalization();

  const [isVisibleSettingModal, setIsVisibleSettingModal] = useState(false);
  const menuItems = getMenuItems(getString);

  const onPressMenuItemClick = (item: any) => {
    if (item.openSettings) {
      setIsVisibleSettingModal(true);
    } else if (item.navigateToScreen) {
      navigation.navigate(NavigationNames.DashBoardTab, { screen: item.navigateToScreen });
    }
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ScrollView style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => `key${index}ForMenu`}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => onPressMenuItemClick(item)} style={styles.itemTouchable}>
              <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={item.iconName}
                    size={24}
                    color={Theme.colors.iconColor}
                    style={styles.icon}
                  />
                </View>
                <Text style={styles.titleText}>{item.title}</Text>
                {!!item.noteNumber && <Text style={styles.noteNumber}>{item.noteNumber}</Text>}
              </View>
            </TouchableHighlight>
          )}
        // ItemSeparatorComponent={() => <Divider />}
        />
        <SettingsBottomSheet
          isVisible={isVisibleSettingModal}
          onDismissModal={() => setIsVisibleSettingModal(false)}
        />
        <GlobalFooter></GlobalFooter>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor:'#F8F8F8',
  },
  container: { flex: 1 },
  flex1: {
    flex: 1
  },
  itemTouchable: {
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingEnd: 18,
    paddingStart: 0,
    borderRadius: 10,
  },
  iconContainer: {
    width: 60,
    alignSelf: "center"
  },
  icon: { alignSelf: "center" },
  titleText: {
    flex: 1,
    alignSelf: "center",
    color: Theme.colors.black,
    fontSize: 17
  },
  noteNumber: {
    color: Theme.colors.iconColor,
    fontSize: 18,
    fontFamily: "Rubik",
  }
});
