import React, { Component, useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from 'react-native-ratings';
import { useSelector } from 'react-redux'
import { Avatar, Divider, TouchableHighlight } from "../../components";
import { Theme } from "../../theme";
import { useLocalization } from "../../localization";
import { HeaderComponent } from "../../components/header";
import GlobalFooter from "../../styles/GolobalFooter";
import {
  AvatarBorder,
  SemiCircle,
  EdgeCircle,
  AvatarContainer,
  Profile,
  NameText,
  LocationText,
  HourlText,
  RateContainer,
  SuccessText,
  LocationCotainer,
  NameContainer,
  SkillTitle,
  SkillContainer,
  Skills,
  SkillSet,
  SkillText,
  Buttons,
  Button,
  ReaquestButton,
  RequestText,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BoaderButton from "../../styles/BoaderButton";
import Crown from '../../styles/Crown';
import StarCheck from '../../styles/StarCheck';
import EditButton from '../../styles/EditButton';
import { StyledText } from '../../styles/GlobalText';
import AboutBio from "../../components/about-bio/AboutBio";
import ReportUser from "../../components/ReportUser";
import Education from "../../components/education/Education";
import Availability from "../../components/availability/Availability";
import NavigationNames from "../../navigations/NavigationNames";
import { useNavigation } from "@react-navigation/native";

type TProps = {
};

export const ProfileScreen: React.FC<TProps> = props => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onClickTab = (index: number) => {
    setSelectedTab(index);
  };

  const { profileData } = useSelector((state: any) => state);
  const { getString } = useLocalization();
  const navigation = useNavigation();
  const buttonList: string[] = [
    "About/Bio",
    "Education",
    "Availability",
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <HeaderComponent></HeaderComponent>
      <ScrollView
        style={styles.flex1}
        contentContainerStyle={styles.scrollContainer}
      >
        <AvatarContainer >
          <AvatarBorder>
            <SemiCircle></SemiCircle>
            <Avatar
              imageStyle={styles.imageStyle}
              source={profileData.imageUrl}
            />
            {/* <EdgeCircle></EdgeCircle> */}
            <EditButton top={105} right={5}></EditButton>
          </AvatarBorder>
          <Profile>
            <NameContainer>
              <Crown></Crown>
              <NameText>{profileData.fullName}</NameText>
              <StarCheck></StarCheck>
            </NameContainer>
            <LocationCotainer>
              <FontAwesomeIcon icon={faMapMarkerAlt} size={12} color={Theme.colors.locationColor}></FontAwesomeIcon>
              <LocationText>{profileData.address}</LocationText>
            </LocationCotainer>
            <HourlText>${profileData.hourly} / min</HourlText>
            <RateContainer>
              <Rating
                imageSize={13}
                readonly
                startingValue={profileData.feedback}
              ></Rating>
              <SuccessText>{profileData.successRate.toFixed(1)}%</SuccessText>
            </RateContainer>
            <BoaderButton buttonText={"Contact"} marginTop={5}></BoaderButton>
          </Profile>
        </AvatarContainer>
        <ReaquestButton onPress={() => navigation.navigate("BookAppointmentScreen")}>
          <RequestText>Request Appointment Now!</RequestText>
        </ReaquestButton>
        <SkillContainer>
          <EditButton top={0} right={0}></EditButton>
          <SkillTitle>Skills and Expertise</SkillTitle>
          <Skills>
            {profileData.skills.map((skill: string, index: number) =>
              <SkillSet key={index}>
                <SkillText>{skill}</SkillText>
              </SkillSet>
            )}
          </Skills>
        </SkillContainer>
        <Buttons>
          {buttonList.map((button: string, index: number) =>
            <Button key={index} onPress={() => onClickTab(index)} selected={selectedTab === index}>
              <StyledText color={selectedTab === index ? "white" : Theme.colors.gray} fontSize={11}>{button}</StyledText>
            </Button>
          )}
        </Buttons>
        {selectedTab === 0 ? <AboutBio aboutBioData={profileData.aboutBIo}></AboutBio> : selectedTab === 1 ? <Education education={profileData.education}></Education> : <Availability availability={profileData.availability}></Availability>}
        <ReportUser></ReportUser>
        <GlobalFooter></GlobalFooter>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
  flex1: { flex: 1 },
  scrollContainer: { paddingVertical: 16, alignItems: "center" },
  imageStyle: {
    width: 122,
    height: 122,
    borderRadius: 65,
    borderColor: Theme.colors.primaryColor,
    borderWidth: 0.5,
    alignSelf: "center",
  },
  imageEdit: {
    position: "absolute",
  },
  daysText: {
    alignSelf: "center",
    fontSize: 14,
    marginTop: 6,
    color: Theme.colors.black
  },
  menuRowContent: {
    flexDirection: "row",
    paddingStart: 12,
    paddingEnd: 16,
    paddingVertical: 16
  },
  iconContent: {
    width: 32
  },
  menuRowsContent: { paddingHorizontal: 8, flex: 1 },
  menuRowTitle: {
    fontSize: 17
  },
  menuRowSubtitle: {
    fontSize: 12,
    marginTop: 4
  },
  divider: { marginStart: 46 }
});
