import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    CheckBox,
    View,
    FlatList,
    TouchableOpacity,
    Picker,
} from "react-native";
import {
    MainArea,
    SuccessCircle,
} from './styles';
import CheckIcon from './checkIcon';
import GlobalButton from "../../styles/GlobalButton";

import NavigationNames from "../../navigations/NavigationNames";
import { useNavigation } from "@react-navigation/native";

export const PaySuccessComponent: React.FC<{}> = props => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <MainArea>
                <SuccessCircle>
                    <CheckIcon></CheckIcon>
                    <Text style={styles.RequestText}>Your Request {"\n"}Has Been Sent!</Text>
                </SuccessCircle>
                <Text style={styles.Description}>You should hear from {"\n"}the advisor soon!</Text>
                <View style={styles.GotoHome}>
                    <GlobalButton Flag={'ArrowTrue'} onPress={() => navigation.navigate(NavigationNames.DashBoardTab, { screen: NavigationNames.HomeScreen })} buttonText={'Return Home'} />
                </View>
            </MainArea>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    RequestText: {
        fontSize: 25,
        color: 'white',
        textAlign: "center",
    },
    Description: {
        textAlign: "center",
        marginTop: 20,
        color: '#999999',
        fontSize: 22,
    },
    GotoHome: {
        marginTop: 10,
    }
});
