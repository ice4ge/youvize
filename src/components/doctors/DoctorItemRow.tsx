import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image
} from "react-native";
import { DoctorModel } from "../../models";
import { Theme } from "../../theme";
import { AirbnbRating, Rating } from "react-native-ratings";
import Crown from '../../styles/Crown';
import CheckIcon from '../../styles/StarCheck';
import { StyledText } from "../../styles/GlobalText";
import { Skills, SkillSet, SkillText } from "../../screens/profile/styles";

type TProps = {
  item: DoctorModel;
  style?: ViewStyle;
};

export const DoctorItemRow: React.FC<TProps> = props => {
  return (
    <>
      <View style={[styles.container, props.style]}>
        <Image
          source={{ uri: props.item.imageUrl }}
          style={styles.avatar}
        />
        <View style={styles.nameConatiner}>
          <Crown></Crown>
          <StyledText color={Theme.colors.black} fontSize={16} style={styles.fullName} numberOfLines={1}>{props.item.fullName}</StyledText>
          <StyledText>${props.item.hourly || "1"}/min</StyledText>
        </View>
        <View style={styles.skillContainer}>
          {props.item.skills?.map((skill: string, index: number) =>
            <Skills key={index}>
              <SkillSet style={styles.skillSet}><SkillText style={styles.skillText}>{skill}</SkillText></SkillSet>
            </Skills>
          )}

        </View>
        <View style={styles.rateContainer}>
          <AirbnbRating
            showRating={false}
            count={5}
            size={16}
            isDisabled
            defaultRating={props.item.rating}
          />
          <View>
            <StyledText color={"#A9A4A4"}>{props.item.points}</StyledText>
            <StyledText color={Theme.colors.locationColor}>Points</StyledText>
          </View>
          {props.item.verified && <CheckIcon></CheckIcon>}
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: Theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5.00,
    elevation: 3,
  },
  avatar: {
    height: 96,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  skillSet: {
    backgroundColor: "#FFA5501F",
    borderColor: "#FFA55030",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  skillContainer: {
    height: 58,
    overflow: "hidden",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "#D1D1D144",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  skillText: {
    color: "#FFA550",
  },
  fullName: {
    flex: 1,
    marginHorizontal: 5,
  },
  nameConatiner: { 
    flexDirection: "row", 
    marginHorizontal: 9, 
    alignItems: "center", 
    marginVertical: 7,
  },
  rateContainer: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 3,
  }
});
