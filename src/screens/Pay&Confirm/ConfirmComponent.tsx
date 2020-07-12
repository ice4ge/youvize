import React, { useState, useEffect, useRef } from "react";
import { GlobalContainer } from "../../styles/GlobalContainer";
import {
    StyleSheet,
} from "react-native";
import { HeaderComponent } from "../../components/header";
import { CardComponent } from "../../components/BookingPaymentCardComponent";


export const ConfirmPaymentScreen: React.FC<{}> = props => {
    return (
        <GlobalContainer style={styles.WholeWindow}>
            <HeaderComponent HideSearchKey="BookAppointment"></HeaderComponent>
            <CardComponent></CardComponent>
        </GlobalContainer>
    );
};

const styles = StyleSheet.create({
    WholeWindow: {
        backgroundColor: 'white'
    },
});
