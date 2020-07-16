import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UpcomingAppoinmentRow,
  DashboardMenuItemRow,
  Divider,
  SectionHeader,
  DashboardCampaignsListItem,
  DoctorItemRow,
  DepartmentItem,
} from "../../components";
import { DashboardItemsModel } from "../../models";
import { DashboardService } from "../../services";
import { useLocalization } from "../../localization";
import NavigationNames from "../../navigations/NavigationNames";
import { HomeMenuItemType } from "../../types";
import { GlobalContainer } from "../../styles/GlobalContainer";
import {HeaderComponent} from "../../components/header";
import GlobalFooter from "../../styles/GolobalFooter";
import { TermsModal } from "../../modals";
import { faCheckSquare, faBriefcase, faChartLine, faChartBar } from "@fortawesome/free-solid-svg-icons";
import Earnings from "../../components/dashboard/Earnings";

const generateMenuItems = (
  getString: (key: string) => string
): HomeMenuItemType[] => [
  {
    row1: getString("You have received an Appointment request for Technology consulting from"),
    row2: getString("July 31, 2:00pm | SQL, AWS & Clo... | 45 m / $90."),
    bookDate: getString("Oct 20"),
    clientName: getString("Charlie"),
  },
  {
    row1: getString("You have received an Appointment request for Technology consulting from"),
    row2: getString("July 31, 2:00pm | SQL, AWS & Clo... | 45 m / $90."),
    bookDate: getString("Oct 20"),
    clientName: getString("Xavier") ,
  }
];

type TProps = {};

export const HomeScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();
  const { getString, changeLanguage } = useLocalization();
  const [dashboardItem, setDashboardItem] = useState<DashboardItemsModel>(null);
  const [isShowedStoryModal, setIsShowedStoryModal] = useState(true);

  useEffect(() => {
    DashboardService.getDashboardItems().then(item => {
      setDashboardItem(item);
    });
  }, []);

  if (dashboardItem === null) {
    return <Text>Loading</Text>;
  }

  return (
    <GlobalContainer>
      <HeaderComponent></HeaderComponent>
      <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
      >
      <SectionHeader icon={faBriefcase} title={getString("Next Appointment")} rightTitle={getString("2 days")}/>
      <UpcomingAppoinmentRow
        style={styles.upcomingAppoinmentRow}
        item={dashboardItem.appointment}
      />
      <SectionHeader 
        icon={faCheckSquare} 
        title={getString("New Requests")} 
        rightTitle={getString("(2)")}
      />
      <FlatList
        data={generateMenuItems(getString)}
        keyExtractor={(item, index) => `key${index}1ForMenu`}
        renderItem={row => (
          // <TouchableHighlight onPress={() => onClickMenu(row.item)}>
            <DashboardMenuItemRow item={row.item} />
          // {/* </TouchableHighlight> */}
        )}
        ItemSeparatorComponent={() => <Divider h16 />}
        scrollEnabled={false}
      />
      <SectionHeader
        title={getString("Earnings")}
        icon={faChartBar}
      />
      <Earnings earnings={dashboardItem.earning}></Earnings>
      
      <GlobalFooter></GlobalFooter>
    </ScrollView>
    <TermsModal
        isShowed={isShowedStoryModal}
        onSwipeComplete={() => setIsShowedStoryModal(false)}
      />
    </GlobalContainer>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, backgroundColor: "#F8F8F8" },
  upcomingAppoinmentRow: {
    marginHorizontal: 16,
  },
  touchableDoctorItem: {
    paddingStart: 16,
    paddingEnd: 8
  },
  campaignsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  departmentsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  horizontalDivider: { width: 12 }
});
