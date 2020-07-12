import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doctorsList } from "../../datas";
import { DoctorItemRow } from "../../components";
import NavigationNames from "../../navigations/NavigationNames";
import {HeaderComponent} from "../../components/header";
import GlobalFooter from "../../styles/GolobalFooter";

type TProps = {};

export const DoctorListScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <FlatList
        data={doctorsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationNames.DoctorDetailScreen, {
                model: JSON.stringify(item)
              })
            }
            style={styles.itemRowContainer}
          >
            <DoctorItemRow item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `key${index}ForDoctor`}
        contentContainerStyle={{ paddingVertical: 12 }}
        style={styles.container}
        numColumns={2}
      />
      <GlobalFooter></GlobalFooter>
    </>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingLeft: 15, },
  itemRowContainer: {
    width: "50%",
  }
});
