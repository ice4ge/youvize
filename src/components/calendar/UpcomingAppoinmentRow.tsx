import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../avatar";
import { AppointmentModel } from "../../models/AppointmentModel";
import moment from "moment";
import StarCheck from '../../styles/StarCheck'
import { FlexView } from "../about-bio/styles";
import { StyledText } from "../../styles/GlobalText";
import { Skills, SkillSet, SkillText } from '../../screens/profile/styles';
import { Buttons } from './styles';
import IconButton from '../../styles/IconButton';
import { faArrowRight, faEnvelope, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type TProps = {
  style?: ViewStyle;
  item: AppointmentModel;
};

export const UpcomingAppoinmentRow: React.FC<TProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={{ flexDirection: "row", marginBottom: 6, }}>
        <Avatar
          source={{
            uri: props.item.doctor.imageUrl
          }}
          status={props.item.doctor.isOnline ? "online" : "bussy"}
        />
        <View style={styles.rows}>
          {/* <Text style={styles.titleText}>{props.item.title}</Text> */}
          <View style={styles.nameView}>
            <Text style={styles.doctorNameText}>{props.item.doctor.fullName}</Text>
            <StarCheck></StarCheck>
          </View>
          <StyledText style={styles.profile} numberOfLines={1}>{props.item.doctor.profile}</StyledText>
          <Text style={styles.locationText}>
            {props.item.doctor.time}
          </Text>
          <StyledText style={styles.date}>{props.item.doctor.date || " "}</StyledText>
        </View>
      </View>
      <Skills>
        {props.item.doctor.skills.map((skill: string, index: number) =>
          <SkillSet key={index}>
            <SkillText>{skill}</SkillText>
          </SkillSet>
        )}
      </Skills>
      <Buttons>
        <IconButton icon={faEnvelope}></IconButton>
        <IconButton text={"Join"} active={true}></IconButton>
        <IconButton text={"Details"} icon={faChevronRight} active={true}></IconButton>
      </Buttons>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.white,
    padding: 10,
    borderRadius: 15,
    flexDirection: "column",
    shadowColor: "#D2D2D2",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.00,
    elevation: 3,
  },
  rows: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 2
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: Theme.colors.black,
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center"
  },
  doctorNameText: {
    fontSize: 14,
    color: Theme.colors.black,
    fontWeight: "bold",
    marginRight: 5,
  },
  profile: {
    marginTop: 15
  },
  locationText: {
    top: 13,
    right: 0,
    position: "absolute",
    color: Theme.colors.black,
  },
  date: {
    position: "absolute",
    right: 0,
    top: -5,
  }
});
