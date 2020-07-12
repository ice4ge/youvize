import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Picker,
} from "react-native";
import { HeaderComponent } from "../../components/header";
import { GlobalContainer } from "../../styles/GlobalContainer";
import { PaySuccessComponent } from "../../components/paySuccess";

export const PaymentSuccessScreen: React.FC<{}> = props => {
    return (
        <GlobalContainer>
            <HeaderComponent></HeaderComponent>
            <PaySuccessComponent></PaySuccessComponent>
        </GlobalContainer>
    )
}
