import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../theme";
import { FontAwesomeIconStyle, FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type TProps = {
  title: string;
  rightTitle?: string;
  rightAction?: () => void;
  icon?: FontAwesomeIconStyle;
};

export const SectionHeader: React.FC<TProps> = props => {
  return (
    <View style={styles.container}>
      {props.icon && <FontAwesomeIcon style={styles.icon} size={18} icon={props.icon} color={Theme.colors.iconColor}></FontAwesomeIcon>}
      <Text style={styles.text}>{props.title}</Text>
      {props.rightTitle && (
        <TouchableOpacity style={styles.tOpacity} onPress={props.rightAction}>
          <Text style={styles.moreText}>{props.rightTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingStart: 16,
    paddingEnd: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    flex: 1,
    color: Theme.colors.black,
    fontSize: 18,
    paddingVertical: 8
  },
  tOpacity: {
    width: "auto",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  moreText: {
    fontWeight: "700",
    color: Theme.colors.iconColor,
    fontSize: 18
  },
  icon: {
    marginHorizontal: 12,
  }
});
