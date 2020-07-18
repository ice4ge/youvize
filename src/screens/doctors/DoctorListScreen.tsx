import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Picker,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { doctorsList } from "../../datas";
import { DoctorItemRow } from "../../components";
import NavigationNames from "../../navigations/NavigationNames";
import { HeaderComponent } from "../../components/header";
import GlobalFooter from "../../styles/GolobalFooter";
import {
  SelectArea,
  CategorySelect,
  LengthSelect
} from './styles';

type TProps = {};

export const DoctorListScreen: React.FC<TProps> = props => {
  const navigation = useNavigation();
  const categoryList = [
    'category: Technology', 'category: figma', 'category: scatch'
  ];
  const lengthList = [
    'Sort: Availability', 'Sort: Skills', 'Sort: Reviews'
  ];
  const [category, setCategory] = useState(categoryList[0]);
  const [length, setLength] = useState(lengthList[0]);
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <SelectArea>
        <CategorySelect>
          <Picker style={styles.picker} selectedValue={'category:Technology'} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
            <Picker.Item label='category:Technology' value='Technology' />
            <Picker.Item label='category:figma' value='figma' />
            <Picker.Item label='category:scatch' value='scatch' />
          </Picker>
        </CategorySelect>
        <LengthSelect>
          <Picker style={styles.picker} selectedValue={length} onValueChange={(itemValue, itemIndex) => setLength(itemValue)}>
            <Picker.Item label='Sort:Availability' value='Availability' />
            <Picker.Item label='Sort: Skills' value='Skills' />
            <Picker.Item label='Sort: Reviews' value='Reviews' />
          </Picker>
        </LengthSelect>
      </SelectArea>
      <FlatList
        data={doctorsList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationNames.ProfileScreen)
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
  },
  picker: {
    height: 25,
    fontSize: 5,
    color: '#a6a6a6',
  },
});
