import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { Theme } from "../../theme";
import { HomeMenuItemType } from "../../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyledText } from "../../styles/GlobalText";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type TProps = {
  style?: ViewStyle;
  item: HomeMenuItemType;
};

export const DashboardMenuItemRow: React.FC<TProps> = props => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rowsContent}>
        <Text style={styles.row2Text}>{props.item.row1}<Text style={{fontWeight: "bold"}}> {props.item.clientName}</Text></Text>
        <Text style={styles.row3Text}>{props.item.row2}</Text>
      </View>
      <View style={styles.rightIconContent}>
        <StyledText style={styles.bookDate}>{props.item.bookDate}</StyledText>
        <FontAwesomeIcon icon={faChevronRight} color={Theme.colors.grayForItemsArrow}></FontAwesomeIcon>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 8,
    paddingVertical: 8,
    paddingLeft: 15,
    shadowColor: "#D2D2D2",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,
    elevation: 1,
  },
  rowsContent: { flex: 1, justifyContent: "center", },
  row2Text: {
    color: Theme.colors.black,
    fontWeight: "600",
    fontSize: 11,
    marginTop: 3
  },
  row3Text: {
    color: Theme.colors.primaryColor,
    marginTop: 4,
    fontWeight: "600",
    fontSize: 11,
  },
  rightIconContent: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: 50,
    marginRight: 12,
  },
  bookDate: {
    position: "absolute",
    left: 0,
    top: 0,
  }
});
