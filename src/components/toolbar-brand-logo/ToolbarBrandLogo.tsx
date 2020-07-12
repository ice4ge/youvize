import React from "react";
import { StyleSheet, Image, View, ViewStyle } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserModel } from "../../models";

type TProps = {
  // item: UserModel;
  // style?: ViewStyle;
};

export const ToolbarBrandLogo: React.FC<TProps> = props => (
  <View style={styles.headerContainer}>
    <FontAwesomeIcon icon={faBars} size={30} color={"#a1a1a1"} style={styles.menuIcon}/>
  </View>
);

const styles = StyleSheet.create({
  image: { width: 120, height: 32, resizeMode: "contain", marginLeft: 15, },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    backgroundColor: "#ebebeb",
    alignItems: "center",
  },
  menuIcon: {
    marginLeft: 15,
  }
});
